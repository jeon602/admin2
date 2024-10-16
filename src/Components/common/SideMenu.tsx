import React, { useState } from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import { useLocation, Link } from 'react-router-dom';
import gridImage from '../../Asset/image/grid.png';
import visitImage from '../../Asset/image/visit.png';
import gameImage from '../../Asset/image/game.png';
import userImage from '../../Asset/image/user.png';
import adminImage from '../../Asset/image/admin.png';
import editImage from '../../Asset/image/edit.png';
import logoutImage from '../../Asset/image/logout.png';
import toolsImage from '../../Asset/image/tools.png';
import LogoutModal from '../LogoutModal';

interface NavItemProps {
  label: string;
  to: string;
  icon?: string;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ label, to, icon, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Flex
      as={to !== '/logout' ? Link : undefined}
      to={to !== '/logout' ? to : undefined}
      align="center"
      p="2"
      m="2"
      borderRadius="md"
      cursor="pointer"
      bg={isActive ? 'blue.500' : 'transparent'}
      color={isActive ? 'white' : 'black'}
      _hover={{ bg: 'gray.200', color: 'black' }}
      onClick={onClick}
    >
      {icon && <Image src={icon} boxSize="20px" mr="2" />}
      <Text fontSize="lg" fontWeight="bold">
        {label}
      </Text>
    </Flex>
  );
};
// TODO:  개인 정보 수정 할 수 있도록 기능 추가
const SideMenu: React.FC = () => {
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  // const [, set] = useState();
  const openLogoutModal = () => setLogoutModalOpen(true);
  const closeLogoutModal = () => setLogoutModalOpen(false);

  return (
    <Box minWidth="250px" bg="gray.100" p="4">
      <Flex direction="column" align="center" mb="4">
        <Link to="/">
          <Box
            boxSize="80px"
            bg="white"
            borderRadius="full"
            p={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
            margin="16px"
          >
            <Image src={toolsImage} alt="logo" margin="4" />
          </Box>
        </Link>
      </Flex>
      <NavItem label="대시보드" to="/" icon={gridImage} />
      {/*<NavItem label="관리자 관리" to="/adminsetting" icon={adminImage} />*/}
      <NavItem label="콘텐츠 관리" to="/contents"  />
      <NavItem
        label="로그아웃"
        to="/logout"
        icon={logoutImage}
        onClick={openLogoutModal}
      />
      <NavItem
        label="마이페이지"
        to="/mypage"
        // onClick={openLogoutModal}
      />
      <LogoutModal isOpen={isLogoutModalOpen} onClose={closeLogoutModal} />
    </Box>
  );
};

export default SideMenu;
