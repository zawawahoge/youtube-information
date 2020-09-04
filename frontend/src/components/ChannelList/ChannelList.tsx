import React, { useEffect } from "react";
import { Channel } from "../../proto/commonservice_pb";

type Props = {
  channels: Channel[];
};

function ChannelList(props: Props) {
  const lists = props.channels.map((channel) => {
    return (
      <div>
        <li>
          <button>
            ID: {channel.getId()} NAME: {channel.getName()}
          </button>
        </li>
      </div>
    );
  });
  return (
    <div>{lists.length === 0 ? <div>No Channels</div> : <ul>{lists}</ul>}</div>
  );
}

export default ChannelList;
