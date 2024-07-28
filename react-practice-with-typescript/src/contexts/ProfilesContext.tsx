import { createContext, useContext, useState, ReactNode } from "react";

export interface Profile {
  id: string;
  image: ReactNode | null;
  name: string;
  birthday: string;
  password: string;
}

interface ProfilesContextType {
  profiles: Profile[];
  setProfiles: React.Dispatch<React.SetStateAction<Profile[]>>;
}

const initialContext: ProfilesContextType = {
  profiles: [],
  setProfiles: () => {},
};

const ProfilesContext = createContext<ProfilesContextType>(initialContext);

interface ProfilesProviderProps {
  children: ReactNode;
}

export const ProfilesProvider = ({ children }: ProfilesProviderProps) => {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  return (
    <ProfilesContext.Provider value={{ profiles, setProfiles }}>
      {children}
    </ProfilesContext.Provider>
  );
};

export const useProfiles = () => useContext(ProfilesContext);
