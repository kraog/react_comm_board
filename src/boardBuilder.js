import Board  from './models/Board'

const BoardBuilder = document => {
  return {
    build(root, id, id_up, elems) {
    	const docfrag = document.createDocumentFragment();
      if (root && Array.isArray(elems)) {
      return root.appendChild(Board().set(id, id_up, elems));
      }
    }
  };
};

export default BoardBuilder;