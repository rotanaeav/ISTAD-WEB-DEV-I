"use client";

import ComingSoon from "@/src/components/ui/ComingSoon";
import Typewriter from "@/src/components/ui/TypeWriter";

export default function ProfilePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] w-full p-8 md:p-12 animate-in fade-in zoom-in-95 duration-500">
      <ComingSoon
        title={<Typewriter text="Profile Page......" />}
        description="This section is under development. Please check back later for updates!"
        backLink="/dashboard/products"
      />
    </div>
  );
}