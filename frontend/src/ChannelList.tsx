import React from 'react';
import { Channel } from './proto/commonservice_pb';

type Props = {
    channels: Channel[],
}

function ChannelList(props: Props) {
    const lists = props.channels.map((channel) => {
        return <li>ID: {channel.getId()}  NAME: {channel.getName()}</li>
    })
    return (
        <ul>
            {lists}
        </ul>
    );
}

export default ChannelList;
