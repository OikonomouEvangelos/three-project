// app/admin/page.tsx
export default function AdminDashboard() {
  const appointments = [
    { id: 1, name: "Costas P.", service: "Haircut & Beard", barber: "Alex", time: "14:00" },
    // More data...
  ];

  return (
    <div className="p-12 bg-background min-h-screen text-cream">
      <div className="flex justify-between items-end mb-12 border-b border-accent pb-6">
        <h1 className="text-4xl uppercase tracking-tighter">Agenda</h1>
        <button className="bg-cream text-black px-6 py-2 text-xs font-bold uppercase">Manual Entry +</button>
      </div>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-accent uppercase text-[10px] tracking-[0.3em] border-b border-accent/20">
            <th className="pb-4">Client</th>
            <th className="pb-4">Service</th>
            <th className="pb-4">Barber</th>
            <th className="pb-4">Time</th>
            <th className="pb-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-accent/10">
          {appointments.map((apt) => (
            <tr key={apt.id} className="hover:bg-accent/5 transition-colors">
              <td className="py-6 font-medium">{apt.name}</td>
              <td className="py-6 text-accent">{apt.service}</td>
              <td className="py-6">{apt.barber}</td>
              <td className="py-6">{apt.time}</td>
              <td className="py-6 text-right">
                <button className="text-[10px] uppercase tracking-widest border border-accent px-3 py-1 hover:bg-red-900/20">Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}