import React from "react";

import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  Table,
  UncontrolledDropdown
} from "reactstrap";

import Timeline from "../../components/Timeline";
import TimelineItem from "../../components/TimelineItem";

import { MoreHorizontal } from "react-feather";

import avatar1 from "../../assets/img/avatars/avatar.jpg";
import avatar2 from "../../assets/img/avatars/avatar-2.jpg";
import avatar3 from "../../assets/img/avatars/avatar-3.jpg";
import avatar4 from "../../assets/img/avatars/avatar-4.jpg";
import avatar5 from "../../assets/img/avatars/avatar-5.jpg";

const ClientsList = () => (
  <Card>
    <CardHeader>
      <div className="card-actions float-right">
        <UncontrolledDropdown>
          <DropdownToggle tag="a">
            <MoreHorizontal />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
      <CardTitle tag="h5" className="mb-0">
        Clients
      </CardTitle>
    </CardHeader>
    <CardBody>
      <Table className="mb-0">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Company</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src={avatar3}
                width="32"
                height="32"
                className="rounded-circle my-n1"
                alt="Avatar"
              />
            </td>
            <td>Angelica Ramos</td>
            <td>The Wiz</td>
            <td>angelica@ramos.com</td>
            <td>
              <Badge color="success">Active</Badge>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src={avatar1}
                width="32"
                height="32"
                className="rounded-circle my-n1"
                alt="Avatar"
              />
            </td>
            <td>Ashton Cox</td>
            <td>Levitz Furniture</td>
            <td>ashton@cox.com</td>
            <td>
              <Badge color="success">Active</Badge>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src={avatar4}
                width="32"
                height="32"
                className="rounded-circle my-n1"
                alt="Avatar"
              />
            </td>
            <td>Brenden Wagner</td>
            <td>The Wiz</td>
            <td>brenden@wagner.com</td>
            <td>
              <Badge color="warning">Inactive</Badge>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src={avatar2}
                width="32"
                height="32"
                className="rounded-circle my-n1"
                alt="Avatar"
              />
            </td>
            <td>Charde Marshall</td>
            <td>Price Savers</td>
            <td>charde@marshall.com</td>
            <td>
              <Badge color="success">Active</Badge>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src={avatar3}
                width="32"
                height="32"
                className="rounded-circle my-n1"
                alt="Avatar"
              />
            </td>
            <td>Doris Wilder</td>
            <td>Red Robin Stores</td>
            <td>doris@wilder.com</td>
            <td>
              <Badge color="warning">Inactive</Badge>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src={avatar4}
                width="32"
                height="32"
                className="rounded-circle my-n1"
                alt="Avatar"
              />
            </td>
            <td>Fiona Green</td>
            <td>The Sample</td>
            <td>fiona@green.com</td>
            <td>
              <Badge color="warning">Inactive</Badge>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src={avatar1}
                width="32"
                height="32"
                className="rounded-circle my-n1"
                alt="Avatar"
              />
            </td>
            <td>Garrett Winters</td>
            <td>Good Guys</td>
            <td>garrett@winters.com</td>
            <td>
              <Badge color="success">Active</Badge>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src={avatar5}
                width="32"
                height="32"
                className="rounded-circle my-n1"
                alt="Avatar"
              />
            </td>
            <td>Gavin Cortez</td>
            <td>Red Robin Stores</td>
            <td>gavin@cortez.com</td>
            <td>
              <Badge color="success">Active</Badge>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src={avatar2}
                width="32"
                height="32"
                className="rounded-circle my-n1"
                alt="Avatar"
              />
            </td>
            <td>Haley Kennedy</td>
            <td>Helping Hand</td>
            <td>haley@kennedy.com</td>
            <td>
              <Badge color="danger">Deleted</Badge>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src={avatar5}
                width="32"
                height="32"
                className="rounded-circle my-n1"
                alt="Avatar"
              />
            </td>
            <td>Howard Hatfield</td>
            <td>Price Savers</td>
            <td>howard@hatfield.com</td>
            <td>
              <Badge color="warning">Inactive</Badge>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src={avatar1}
                width="32"
                height="32"
                className="rounded-circle my-n1"
                alt="Avatar"
              />
            </td>
            <td>Jena Gaines</td>
            <td>Helping Hand</td>
            <td>jena@gaines.com</td>
            <td>
              <Badge color="success">Active</Badge>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src={avatar4}
                width="32"
                height="32"
                className="rounded-circle my-n1"
                alt="Avatar"
              />
            </td>
            <td>Jennifer Chang</td>
            <td>Helping Hand</td>
            <td>jennifer@chang.com</td>
            <td>
              <Badge color="warning">Inactive</Badge>
            </td>
          </tr>
        </tbody>
      </Table>
    </CardBody>
  </Card>
);

const Single = () => (
  <Card>
    <CardHeader>
      <div className="card-actions float-right">
        <UncontrolledDropdown>
          <DropdownToggle tag="a">
            <MoreHorizontal />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
      <CardTitle tag="h5" className="mb-0">
        Angelica Ramos
      </CardTitle>
    </CardHeader>
    <CardBody>
      <Row noGutters>
        <Col sm="3" xl="12" className="col-xxl-3 text-center">
          <img
            src={avatar3}
            width="64"
            height="64"
            className="rounded-circle mt-2"
            alt="Angelica Ramos"
          />
        </Col>
        <Col sm="9" xl="12" className="col-xxl-9">
          <strong>About me</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Col>
      </Row>

      <Table size="sm" className="my-2">
        <tbody>
          <tr>
            <th>Name</th>
            <td>Angelica Ramos</td>
          </tr>
          <tr>
            <th>Company</th>
            <td>The Wiz</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>angelica@ramos.com</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>+1234123123123</td>
          </tr>
          <tr>
            <th>Status</th>
            <td>
              <span className="badge badge-success">Active</span>
            </td>
          </tr>
        </tbody>
      </Table>

      <hr />

      <strong>Activity</strong>

      <Timeline className="mt-2">
        <TimelineItem>
          <strong>Signed out</strong>
          <span className="float-right text-muted text-sm">30m ago</span>
          <p>Nam pretium turpis et arcu. Duis arcu tortor, suscipit...</p>
        </TimelineItem>
        <TimelineItem>
          <strong>Created invoice #1204</strong>
          <span className="float-right text-muted text-sm">2h ago</span>
          <p>Sed aliquam ultrices mauris. Integer ante arcu...</p>
        </TimelineItem>
        <TimelineItem>
          <strong>Discarded invoice #1147</strong>
          <span className="float-right text-muted text-sm">3h ago</span>
          <p>Nam pretium turpis et arcu. Duis arcu tortor, suscipit...</p>
        </TimelineItem>
        <TimelineItem>
          <strong>Signed in</strong>
          <span className="float-right text-muted text-sm">3h ago</span>
          <p>Curabitur ligula sapien, tincidunt non, euismod vitae...</p>
        </TimelineItem>
        <TimelineItem>
          <strong>Signed up</strong>
          <span className="float-right text-muted text-sm">2d ago</span>
          <p>Sed aliquam ultrices mauris. Integer ante arcu...</p>
        </TimelineItem>
      </Timeline>
    </CardBody>
  </Card>
);

const Clients = () => (
  <Container fluid className="p-0">
    <h1 className="h3 mb-3">Clients</h1>

    <Row>
      <Col xl="8">
        <ClientsList />
      </Col>
      <Col xl="4">
        <Single />
      </Col>
    </Row>
  </Container>
);

export default Clients;
