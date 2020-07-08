import { getDisplayName } from "next/dist/next-server/lib/utils"

export const CardItem = props => {
  return (
    <>
      <div className="card-item">
        <img src="example1.jpg" alt="project image" />
        <div className="card-content">
          <h3>TypeScript TodoList</h3>
          <p style={{ fontSize: "12px" }}>To Do List built with TypeScript</p>
        </div>
      </div>
      <style jsx>
        {`
          .card-item {
            display: flex;
            flex-direction: row;
            width: 300px;
            height: 100px;
            border-radius: 5px;
            background: hsla(150, 90%, 66%, 0.4);
            overflow: hidden;
            box-shadow: 0 1px 1px 0 rgba(66, 66, 66, 0.08),
              0 1px 3px 1px rgba(66, 66, 66, 0.16);
            transition: 0.1s;
             {
            }
          }

          .card-item:hover {
            background: hsla(150, 90%, 56%, 0.6);
          }

          .card-item img {
            width: 25%;
            max-height: 100%;
          }

          .card-content {
            padding: 16px 20px 12px;
          }
          .card-content h3 {
            margin-bottom: 8px;
          }
        `}
      </style>
    </>
  )
}
