export default function Footer() {
  return (
    <footer className="bg-black text-white p-6 mt-10 text-center">
      <p>&copy; {new Date().getFullYear()} Istiyaq Khan Razin. All rights reserved.</p>
      <p>Email: <a href="mailto:razinkhan3245@gmail.com" className="text-green-500">razinkhan3245@gmail.com</a></p>
    </footer>
  );
}