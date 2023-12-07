import Link from "next/link";
import Image from "next/image";

export default function Card({ title, image, link, caption, icon }) {
  return (
    <>
      <div className="card mx-auto my-3" style={{ width: "18rem" }}>
        <Image
          src={image}
          className="card-img-top"
          width={1000}
          height={170}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title text-center">{title}</h5>
          <div className={"d-flex mt-2"}>
            <Link href={link} className="btn btn-primary ms-auto">
              {caption} {icon}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
