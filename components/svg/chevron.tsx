interface ChevronProps {
  isRotated: boolean;
}
const Chevron = ({ isRotated }: ChevronProps) => (
  <svg
    className={`transition-transform duration-300 ${
      isRotated ? "rotate-180" : "rotate-0"
    }`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

export default Chevron;
