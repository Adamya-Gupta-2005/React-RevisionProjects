const useTraverseTree = () => {
    function insertNode(tree, folderId, item, isFolder) {
        if(tree.id === folderId && tree.isFolder) {
            tree.items.unshift({
                id: new Date().getTime(),
                name: item,
                isFolder,
                items:[]
            });

            return tree;
        }
        
        //using dfs to get the placeto insert
        let latestNode = []
        latestNode = tree.items.map((ob) => {
            return insertNode(ob, folderId, item, isFolder)
        })

        return {...tree, items: latestNode}
    }

    function renameNode(tree, nodeId, newName) {
        if(tree.id === nodeId) {
            tree.name = newName
            return tree;
        }

        if(tree.items) {
            tree.items.map((ob) => {
                return renameNode(ob, nodeId, newName)
            });
        }

        return {...tree}
    }

    return {insertNode, renameNode};
}

export default useTraverseTree;