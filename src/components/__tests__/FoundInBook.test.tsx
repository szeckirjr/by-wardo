import { render, screen } from "@testing-library/react";
import type { StaticImageData } from "next/image";
import FoundInBook from "../FoundInBook";

jest.mock("next/image", () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element
  default: (props: any) => <img src={props.src} alt={props.alt} />,
}));

describe("FoundInBook", () => {
  it("shows book info and excerpt", () => {
    const reference = {
      book: {
        title: "Title",
        author: "Auth",
        cover: "/img.png" as unknown as StaticImageData,
      },
      excerpt: <>Quote</>,
    };
    render(<FoundInBook reference={reference} />);
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Auth")).toBeInTheDocument();
    expect(screen.getByText(/Quote/)).toBeInTheDocument();
  });
});
