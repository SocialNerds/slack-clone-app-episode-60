import React from 'react'

const RoomList = (props) => {
    const orderedRooms = [...props.rooms].sort((a, b) => a.id > b.id);
    return (
        <div className="rooms-list">
            <ul>
                <h3>SocialNerds</h3>
                {orderedRooms.map(room => {
                    const active = room.id === props.roomId ? 'active' : '';
                    return (
                        <li key={room.id} className={"room " + active}>
                            <a
                                onClick={() => props.subscribeToRoom(room.id)}
                                href="#">
                                # {room.name}
                            </a>
                        </li>
                    )
                })}
                <li key="logout">
                    <a
                        className="room"
                        onClick={props.logout}
                        href="#">
                        Logout
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default RoomList