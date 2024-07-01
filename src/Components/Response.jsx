export default function Response({ input }) {
  return (
    <h1>
      There was a {input.color} {input.noun} who loved a {input.adj}{" "}
      {input.noun2}
    </h1>
  );
}
