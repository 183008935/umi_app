import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon,Row, Col, Timeline, } from 'antd';
import Link from 'umi/link';
import styles from "./index.less";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
 


 class LayoutSider extends Component {
    render() {
    return (
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
        <div className={styles.Menu_title}> 空弦世界 </div>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ borderRight: 0 }}
          >
            <SubMenu key="sub1" 
              title={<span><Icon type="global" />总项目</span>}>
              <Menu.Item key="1"><Link to="/User">项目管理</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/">用户列表</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/">变更用户</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout >
           <div className={styles.content}>
            <Content style={{ padding:'2rem',background: "#fff" }}>
                {this.props.children}
            </Content>
          </div>
        </Layout>
      </Layout> 
        )
    }
}
export default LayoutSider
 
 