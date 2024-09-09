export default function Textarea() {
  return (
    <textarea
      onChange={(e) => {
        console.log("Changed!");
        console.log(e.target.value);
      }}
      className="textarea"
      placeholder="Enter your text"
      spellCheck="false"
    />
  );
}
