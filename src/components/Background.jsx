export default function Background() {
  return (
    <>
      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-20 top-20 left-10 animate-pulse"></div>

        <div className="absolute w-96 h-96 bg-cyan-500 rounded-full blur-[150px] opacity-20 bottom-10 right-10 animate-pulse"></div>

      </div>
    </>
  );
}