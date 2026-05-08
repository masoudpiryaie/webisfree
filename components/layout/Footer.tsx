// export default function Footer() {
//   return (
//     <footer className="border-t border-gray-200 bg-white px-6 py-8">
//       <div className="mx-auto max-w-6xl text-center text-sm text-gray-500">
//         © {new Date().getFullYear()} Masoud Piryaie. All rights reserved.
//       </div>
//     </footer>
//   );
// }
export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] px-6 py-8">
      <div className="mx-auto max-w-6xl text-center text-sm text-[var(--text-secondary)]">
        © {new Date().getFullYear()} Masoud Piryaie. All rights reserved.
      </div>
    </footer>
  );
}
