module.exports = {
    rules: {
        "mui-no-direct-core-imports": {
            create: function(context) {
                return {
                    ImportDeclaration: node => {
                        if (node.source.value === "@material-ui/core") 
                            context.report({
                                node,
                                message: 'Direct imports from "@material-ui/core" are not allowed! Correct usage example: import Typography from "@material-ui/Core/Typography";'
                            })
                    }
                }
            }
        }
    }
}