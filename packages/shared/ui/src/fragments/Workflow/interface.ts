import { Edge, Node, OnEdgesChange, OnNodesChange, OnConnect } from 'reactflow';

export interface IProps {
    nodes: Node[];
    edges: Edge[];
    onConnect?: OnConnect;
    onEdgesChange?: OnEdgesChange;
    onNodesChange?: OnNodesChange;
}