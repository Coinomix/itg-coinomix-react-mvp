import React from 'react';
import './Header.scss';
import logoCoinomix from '../../assets/images/coinimix-logo.svg';
import demoUserImage from "../../assets/images/header/no_user.svg";
import { Link } from 'react-router-dom';
import SidebarLeft from '../SidebarLeft/SidebarLeft';
import { TagData } from '../../types/articleType';
import { getTagsHomePage } from '../../utils/api_helpers';

export const Header = () => {
  const [tags, setTags] = React.useState<TagData[]>([]);

  const loadData = async () => {
    const tagsDataApi = await getTagsHomePage();
    setTags(tagsDataApi.data);
  };

  React.useEffect(() => {
    loadData();
  }, []);

  return (
    <header className='header'>

    <SidebarLeft tags={tags} />
    
    <Link to='/'>
      <img src={logoCoinomix} alt='Coinimix logo' className='header__logo' />
    </Link>

    <div className="header__user">
      <img className="header__user-photo" src={demoUserImage} alt="User" />
    </div>
 
    </header>
  );
};
