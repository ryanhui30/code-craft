import { SignOutButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <SignUpButton/>

      <SignOutButton/>
    </div>
  );
}
