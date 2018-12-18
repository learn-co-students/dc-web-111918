* Objectives
    - Review CRUD capabilities for single model
    - Create associations between two models
    - Use a dropdown select in a form
    - Create a model instance and its associated instances from a single form


* Steps for nested forms:
    - Create nested form 
    - Build holder for associated model in (e.g., `retailer.snacks.build`)
    - Add `accepts_nested_attributes_for {associated_model}`
    - Add associated params to strong_params of parent model