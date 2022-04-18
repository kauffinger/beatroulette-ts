function Spacer({ size }: { size: "small" | "medium" | "large" }) {
  switch (size) {
    case "small":
      return <div className="my-8" />;
    case "medium":
      return <div className="my-16" />;
    case "large":
      return <div className="my-32" />;
  }
}

export default Spacer;
