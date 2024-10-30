// src/components/FigmaNodeRenderer.js
import React from 'react';

function FigmaNodeRenderer({ node }) {
  switch (node.type) {
    case 'TEXT':
      return <p style={{ fontSize: node.style.fontSize }}>{node.characters}</p>;
    case 'FRAME':
      return (
        <div style={{ padding: '20px', border: '1px solid black' }}>
          {node.children && node.children.map(child => (
            <FigmaNodeRenderer key={child.id} node={child} />
          ))}
        </div>
      );
    default:
      return null;
  }
}

export default FigmaNodeRenderer;