export const metadata = {
  title: "-4degree Admin",
  description: "-4degree Admin Dashboard",
}

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>Nav</div>
      {children}
    </div>
  );
}

export default AdminLayout;