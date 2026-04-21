"use client";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { io, Socket } from "socket.io-client";
import { generateRandomCursor } from "../lib/generate-random-cursor"

export type User = {
  socketId: string;
  name: string;
  color: string;
  pos: {
    x: number;
    y: number;
  };
  location: string;
  flag: string;
};
export type Message = {
  socketId: string;
  content: string;
  time: Date;
  username: string;
};

export type UserMap = Map<string, User>;

type SocketContextType = {
  socket: Socket | null;
  users: UserMap;
  setUsers: Dispatch<SetStateAction<UserMap>>;
  msgs: Message[];
};

const INITIAL_STATE: SocketContextType = {
  socket: null,
  users: new Map(),
  setUsers: () => {},
  msgs: [],
};

export const SocketContext = createContext<SocketContextType>(INITIAL_STATE);

const SocketContextProvider = ({ children }: { children: ReactNode }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [users, setUsers] = useState<UserMap>(new Map());
  const [msgs, setMsgs] = useState<Message[]>([]);

  // SETUP SOCKET.IO
  useEffect(() => {
    // Only connect if WebSocket URL is configured
    if (!process.env.NEXT_PUBLIC_WS_URL) {
      console.log("Socket.io server not configured. Skipping connection.");
      return;
    }

    try {
      const username = localStorage.getItem("username") || generateRandomCursor().name;
      const socket = io(process.env.NEXT_PUBLIC_WS_URL, {
        query: { username },
        autoConnect: true,
        reconnection: true,
        reconnectionAttempts: 3,
        reconnectionDelay: 1000,
      });
      
      setSocket(socket);
      
      socket.on("connect", () => {
        console.log("Socket.io connected");
      });
      
      socket.on("connect_error", (error) => {
        console.log("Socket.io connection error (this is expected if server is not running):", error.message);
      });
      
      socket.on("disconnect", () => {
        console.log("Socket.io disconnected");
      });
      
      socket.on("msgs-receive-init", (msgs) => {
        setMsgs(msgs);
      });
      
      socket.on("msg-receive", (msgs) => {
        setMsgs((p) => [...p, msgs]);
      });
      
      return () => {
        if (socket.connected) {
          socket.disconnect();
        }
      };
    } catch (error) {
      console.log("Socket.io initialization error:", error);
    }
  }, []);

  return (
    <SocketContext.Provider value={{ socket: socket, users, setUsers, msgs }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
