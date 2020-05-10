import * as React from 'react';
import { render } from 'revas';

// if not server side rendering
if (typeof window !== 'undefined') {
  require('hammer-touchemulator')();
}

export interface RevasPlayGroundProps {
  type?: 'phone' | 'widget';
}

export default class RevasPlayGround extends React.Component<RevasPlayGroundProps> {
  static defaultProps = {
    type: 'widget',
  };

  container = React.createRef<HTMLDivElement>();

  revas: any;

  componentDidMount() {
    this.updateRevas(this.props.children);
  }

  componentDidUpdate(prev: RevasPlayGroundProps) {
    if (this.props !== prev) {
      this.updateRevas(this.props.children);
    }
  }

  componentWillUnmount() {
    this.revas && this.revas.unmount();
  }

  updateRevas(app?: React.ReactNode) {
    if (this.revas) {
      this.revas.update(app);
    } else if (this.container.current) {
      this.revas = render(app, this.container.current, this);
    }
  }

  render() {
    return <div ref={this.container} style={style[this.props.type || 'widget']} />;
  }
}

const base = {
  boxShadow: 'rgba(0, 0, 0, 0.1) 0 2px 10px',
  borderRadius: '5px',
  overflow: 'hidden',
  float: 'right',
  margin: '20px',
  marginRight: 0,
  border: '#000 solid 1px',
};

const style: any = {
  phone: {
    ...base,
    width: '375px',
    height: '667px',
  },
  widget: {
    ...base,
    width: '300px',
    height: '300px',
  },
};
