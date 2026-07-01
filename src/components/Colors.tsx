export function Colors() {
  const colors = [
    "bg-teal-700",
    "bg-green-700",
    "bg-emerald-900",
    "bg-lime-600",
    "bg-yellow-500",
    "bg-amber-500",
    "bg-orange-500",
    "bg-red-500",
    "bg-cyan-500",
    "bg-sky-500",
    "bg-blue-500",
    "bg-indigo-500",
    "bg-violet-500",
    "bg-purple-500",
    "bg-fuchsia-500",
    "bg-pink-500",
    "bg-gray-500",
    "bg-zinc-500"
  ];

  return (
    <>
      <div>
        <h2>Colors</h2>
      </div>
      <section className="grid grid-cols-6 gap-1 w-fit">
        {
          colors.map((color, index) => (
            <div 
              key={index}
              className={`${color} w-6 h-6 rounded-xs cursor-pointer`}></div>
          ))
        }
      </section>
    </>
  )
}