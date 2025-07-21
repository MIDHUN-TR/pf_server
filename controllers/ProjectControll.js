const projects = require('../Model/projectmodel')

exports.addProject = async (req, res) => {
    try {
        const userId = req.payload
        const { title, description, languages, gitrepo, demo } = req.body
        const image = req.file.filename
        const existingProject = await projects.findOne({ gitrepo })
        if (existingProject) {
            res.status(406).json("Project Already Added!!")
        }
        else {
            const newProject = new projects({ title, description, languages, gitrepo, demo, image, userId })
            await newProject.save()
            res.status(200).json(newProject)
        }
    }
    catch (e) {
        console.log(e);
        res.status(400).json(e)
    }
}



exports.allProject = async (req, res) => {
    try {
        const projectlist = await projects.find()
        res.status(200).json(projectlist)
    }
    catch (e) {
        console.log(e);
        res.status(400).json(e)
    }
}

exports.userProject = async (req, res) => {
    try {
        const userId = req.payload
        const projectlist = await projects.find({ userId })
        res.status(200).json(projectlist)
    }
    catch {
        console.log(e)
        res.status(400).json(e)
    }
}


exports.getProjectwithId = async (req, res) => {
    try {
        const { id } = req.params
        const projectDocs = await projects.findById(id)
        res.status(200).json(projectDocs)
    }
    catch (e) {
        console.log(e);
        res.status(400).json(e)
    }
}



exports.deleteProject = async (req, res) => {
    try {
        const { id } = req.params
        const projectDocs = await projects.findByIdAndDelete(id)
        res.status(200).json(projectDocs)
    }
    catch (e) {
        console.log(e);
        res.status(400).json(e)
    }
}



exports.updateProject = async (req, res) => {
    try {
        const { id } = req.params
        if (req.file) {
            var { title, description, languages, gitrepo, demo } = req.body
            var image = req.file.filename
        }
        else{
             var { title, description, languages, gitrepo, demo, image } = req.body
        }

        const projectDocs = await projects.findByIdAndUpdate(id, { title, description, languages, gitrepo, demo, image })
        res.status(200).json(projectDocs)
    }
    catch {
        console.log(e);
        res.status(400).json(e)
    }
}