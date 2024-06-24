import { Preloader } from "../../common/Preloader/Preloader";
import { BsFillHandThumbsDownFill } from "react-icons/bs";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  const entries = Object.entries(props.profile.contacts);
  return (
    <div>
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt="Nothing"
        />
      </div>
      <div style={{ display: "flex" }}>
        <img src={props.profile.photos.large} alt="Nothing" />
        <div style={{ marginLeft: "30px" }}>
          <div
            style={{
              fontSize: "30px",
              color: "yellow",
              textShadow:
                "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
            }}
          >
            {props.profile.fullName}
          </div>

          <div style={{ color: "yellow" }}>{props.profile.aboutMe}</div>
          {entries.map(([key, value]) => (
            <div style={{ color: "yellow" }} key={key}>
              <div>{key}:</div> <div>{value ? value : "-"}</div>
            </div>
          ))}
        </div>

        <div
          style={{
            width: "300px",
            display: "flex",
            flexDirection: "column",
            color: "yellow",
            marginLeft: "20px",
            padding: "10px",
          }}
        >
          {props.profile.lookingForAJob ? (
            <>
              <div style={{}}>
                <span> Searching for job</span>

                <BsFillHandThumbsUpFill />
              </div>
            </>
          ) : (
            <>
              <div>
                <span> Doesn`t searching for job</span>

                <BsFillHandThumbsDownFill />
              </div>
            </>
          )}
          <span>{props.profile.lookingForAJobDescription}</span>
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
