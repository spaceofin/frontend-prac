import { createContext, useContext, useState, ReactNode } from "react";

interface Profile {
  image: ReactNode | null;
  name: string;
  year: string;
  month: string;
  day: string;
  password: string;
}

interface ProfilesContextType {
  profiles: Profile[] | null;
  setProfiles: React.Dispatch<React.SetStateAction<Profile[] | null>>;
}

const ProfilesContext = createContext<ProfilesContextType | undefined>(
  undefined
);

interface ProfilesProviderProps {
  children: ReactNode;
}

export const ProfilesProvider = ({ children }: ProfilesProviderProps) => {
  const [profiles, setProfiles] = useState<Profile[] | null>([]);

  return (
    <ProfilesContext.Provider value={{ profiles, setProfiles }}>
      {children}
    </ProfilesContext.Provider>
  );
};

export const useProfiles = () => useContext(ProfilesContext);
