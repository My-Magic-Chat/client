import { Edge, Node, OnEdgesChange, OnConnect } from 'reactflow';

export interface IProps {
    nodes: Node[];
    edges: Edge[];
    onConnect: OnConnect;
    onEdgesChange: OnEdgesChange;
}