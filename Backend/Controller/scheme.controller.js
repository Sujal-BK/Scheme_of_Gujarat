import Scheme from "../Model/scheme.model.js"

export const addScheme = async (req, res) => {
    try {
        const { scheme, description, link } = req.body
        if (!scheme) {
            return res.status(404).json({
                success: false,
                message: "Scheme is required",
            })
        }
        if (!description) {
            return res.status(404).json({
                success: false,
                message: "Description is required",
            })
        }
        if (!link) {
            return res.status(404).json({
                success: false,
                message: "Link is required",
            })
        }

        const newScheme = await Scheme.create({
            scheme,
            description,
            link
        })

        return res.status(200).json({
            success: true,
            message: "Scheme added successfully",
            newScheme
        })
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Error in addeding scheme",
            error
        })
    }
}


export const getAllScheme = async (req, res) => {
    try {
        const schemes = await Scheme.find();
        if (!schemes) {
            return res.status(400).json({
                success: false,
                message: "Empty...",
            })
        }
        return res.status(200).json({
            success: true,
            message: "List of all schemes...",
            schemes
        })
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Error in getting all scheme",
            error
        })
    }
}


export const getSchemeById = async (req, res) => {
    try {
        const { id } = req.params;
        const scheme = await Scheme.findById(id);
        if (!scheme) {
            return res.status(400).json({
                success: false,
                message: "Empty...",
            })
        }
        return res.status(200).json({
            success: true,
            message: "scheme...",
            scheme
        })

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Error in getting scheme",
            error
        })
    }
}

export const deleteScheme = async (req, res) => {
    try {
        const { id } = req.params;
        await Scheme.findByIdAndDelete(id);

        return res.status(200).json({
            success: true,
            message: "Scheme deleted successfully...",

        })

    } catch (error) {

        console.log(error)

        return res.status(500).json({
            success: false,
            message: "Error in delete scheme",
            error
        })
    }
}

export const updateScheme = async (req, res) => {
    try {
        const { id } = req.params

        const updatedScheme = await Scheme.findByIdAndUpdate(id, {
            ...req.body
        }, { new: true })

        if (!updatedScheme) {
            return res.status(404).json({
                success: false,
                message: "Scheme not found..."
            })
        }
        return res.status(200).json({
            success: true,
            message: "Scheme Update Successfully...",
            updatedScheme
        })
    } catch (error) {
        console.log(error)

        return res.status(500).json({
            success: false,
            message: "Error in delete scheme",
            error
        })
    }
}
