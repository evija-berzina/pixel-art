export function Board () {
  const boardElements = Array.from({ length: 16 * 16 });
  return(
    <section className="grid grid-cols-16 grid-rows-16 gap-0.5 w-fit">
      {
        boardElements.map((boardElement, index) => (
          <div 
            key={index}
            className="bg-gray-800 w-4 h-4 cursor-pointer"></div>
        ))
      }
    </section>
  );
}