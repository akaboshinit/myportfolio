import React from 'react';
import styled from 'styled-components'
import { Imgcard } from '../../components/index';

const Profile = (props : any) => {

return (
<>
    <Div>
        <Imgcard
            className="slide"
            size="M"
            img="room.jpg"
            title=""
            content=""
        />
    </Div>
    <div>あ</div>
</>
)
}

const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export default Profile;