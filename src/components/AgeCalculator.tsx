export default function AgeCalculator() {
  const birthDate = new Date('2010-10-24');
  const now = new Date();
  const age = now.getFullYear() - birthDate.getFullYear() -
    (now < new Date(now.getFullYear(), birthDate.getMonth(), birthDate.getDate()) ? 1 : 0);

  return <span>{age}</span>;
}