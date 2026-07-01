export function Header() {
  return (
    <header className="flex flex-row justify-between items-center">
      <div>
        <h1 className="uppercase text-xl">Pixel art</h1>
      </div>
      <div className="flex flex-row gap-4">
        <button className="bg-mist-950 px-4 py-2 rounded-md border border-mist-800 fill-amber-50 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M480 160L480 288L352 288L352 160L480 160zM480 352L480 480L352 480L352 352L480 352zM288 288L160 288L160 160L288 160L288 288zM160 352L288 352L288 480L160 480L160 352zM160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96z"/></svg>
          New</button>
        <button className="bg-mist-950 px-4 py-2 rounded-md border border-mist-800 cursor-pointer">Clear</button>
        <button className="bg-teal-700 px-4 py-2 rounded-md cursor-pointer">Download</button>
      </div>
    </header>
  )
}