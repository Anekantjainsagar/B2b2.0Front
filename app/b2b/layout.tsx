import Sidebar from "../Components/b2b/Sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-[100vh]">
      <Sidebar />
      <div className="w-[85vw] h-full">{children}</div>
    </div>
  );
}
