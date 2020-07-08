import { CardItem } from "@components/CardItem"
export const AdditionalProjects = () => {
  return (
    <>
      <div className="additional">
        <CardItem />
      </div>
      <style jsx>{`
        .additional {
          display: flex;
          flex-direction: column;
        }
        .additional-duplet {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
      `}</style>
    </>
  )
}
