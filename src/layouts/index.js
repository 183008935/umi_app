import React, { Component } from "react";
import styles from "./index.less";
import { Layout, Menu, Icon,Row, Col,Popconfirm} from 'antd';
import Util from '../components/time'
import LayoutSider from './layoutSider'
import moment from 'moment';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class BasicLayout extends Component {
  state={}
  componentWillMount(){
    setInterval(()=>{
        let sysTime = Util.formateDate(new Date().getTime());
        this.setState({
            sysTime
        })
    },1000)
}
   render(){
     return (
    <Layout>
     <Row>
     <Col span={8} pull={1} className={styles.normal}>
     <div className={styles.title}>
     <img src="http://favicon.byi.pw/?url=lan.com" alt="标题"  
     style={{width:'1.2rem',marginRight: 10,paddingBottom:6 }}/>空弦 -- 等待是一种服务
     </div>
     </Col>
     <Col className={styles.titleRight} >
     <div style={{marginLeft:'2rem'}}>
     <Icon type="user" style={{fontSize:'1rem'}}/><span style={{marginLeft:'.4rem',fontSize:'.1rem'}}>某某某</span>
     </div>
      <div style={{fontSize:'.2rem'}}>{this.state.sysTime}</div>
     </Col>
        <Menu
          style={{background:'#0b1836'}}
          mode="horizontal"
          defaultSelectedKeys={['1']}
        >
          <Menu.Item key="1">首页内容</Menu.Item>
        </Menu>
       
   </Row>
       
     <LayoutSider/>
     
    </Layout>)
   }
}

export default  BasicLayout
// const App = props => {
//   return (
//     <div>
//       <Layout className="layout">
//         <Header>
//           <div className="logo" />
//           <Menu
//             theme="dark"
//             mode="horizontal"
//             defaultSelectedKeys={["1"]}
//             style={{ lineHeight: "64px" }}
//           >
//             <Menu.Item key="1"><Link to="/">首页</Link></Menu.Item>
//             <Menu.Item key="2"><Link to="/content">多路由</Link></Menu.Item>
//             <Menu.Item key="3"><Link to="/example">其他</Link></Menu.Item>
//           </Menu>
//         </Header>
//         {props.children}
//         <Footer style={{ textAlign: "center" }}>
//           Ant Design ©2016 Created by Ant UED
//         </Footer>
//       </Layout>
//     </div>
//   );
// };

// export default App;
