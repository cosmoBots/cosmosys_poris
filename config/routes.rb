get 'projects/:project_id/poris',
    to: 'cosmosys_poris/viewer#show',
    as: 'project_poris_viewer'
get 'projects/:project_id/poris/model',
    to: 'cosmosys_poris/viewer#model',
    as: 'project_poris_model'
