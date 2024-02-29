import Image from "../assets/logo.svg"
import { Ahref, AhrefBox, Back, Icewoll, Img, Input, Left, PhotoProfil, Right, Text , IconAhref, Icon, IconBell} from "./header.styles"
import Photo from "../assets/profile-12-XFncj00x.jpg"
const Header = () => {
    return <Back>
        <Left>
        <Icewoll>
            <Img src={Image} alt="" />
            <Text>Icewall</Text>
        </Icewoll>
        <AhrefBox>
            <Ahref href="">Application</Ahref>
            <IconAhref className="fa-solid fa-chevron-right"></IconAhref>
            <Ahref href="">Dashboar</Ahref>
        </AhrefBox>
        </Left>
        <Right>
        <Input type="text" placeholder="Search..." />
        <Icon className="fa-solid fa-magnifying-glass"></Icon>
        <IconBell>
        <i className="fa-regular fa-bell"></i>
        </IconBell>


        <PhotoProfil src={Photo} alt="" />

        </Right>


    </Back>
}
export default Header