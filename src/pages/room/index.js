import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import React from "react";
import { useParams } from "react-router-dom";

const RoomPage = () => {
  const { roomId } = useParams();

  const myMeeting = async (element) => {
    const appID = 603087703;
    const serverSecret = "64536aec37ad7fa35158b363d80a5a15";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Moraj"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  };

  return (
    <div className="room-page">
      <div ref={myMeeting} />
    </div>
  );
};

export default RoomPage;
