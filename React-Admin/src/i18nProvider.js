export const spanishMessages = {
  ra: {
    action: {
      add: 'Agregar',
      edit: 'Editar',
      delete: 'Eliminar',
      show: 'Mostrar',
      list: 'Listar',
      save: 'Guardar',
      cancel: 'Cancelar',
      refresh: 'Actualizar',
      export: 'Exportar',
      search: 'Buscar',
      open_menu: 'Abrir menú',
      close_menu: 'Cerrar menú',
      add_filter: 'Agregar filtro',
      back: 'Volver',
      bulk_actions: "1 Elemento seleccionado |||| %{smart_count} Elementos seleccionados",
      clear_array_input: 'Borrar entradas del arreglo',
      clear_input_value: 'Borrar valor de entrada',
      clone: 'Clonar',
      confirm: 'Confirmar',
      create: 'Crear',
      create_item: 'Crear elemento',
      remove_filter: 'Eliminar filtro',
      remove_all_filters: 'Eliminar todos los filtros',
      remove: 'Eliminar',
      select_all: 'Seleccionar todos',
      select_row: 'Seleccionar fila',
      sort: 'Ordenar',
      undo: 'Deshacer',
      unselect: 'Deseleccionar',
      expand: 'Expandir',
      close: 'Cerrar',
      update: 'Actualizar',
      move_up: 'Mover hacia arriba',
      move_down: 'Mover hacia abajo',
      open: 'Abrir',
      toggle_theme: 'Cambiar tema',
      select_columns: 'Seleccionar columnas',
      update_application: 'Actualizar aplicación',
    },
    notification: {
      updated: 'Elemento actualizado correctamente',
      created: 'Elemento creado con éxito',
      deleted: 'Elemento eliminado correctamente |||| %{smart_count} elementos eliminados',
      bad_item: 'Elemento no válido',
      item_doesnt_exist: 'El elemento no existe',
      http_error: 'Error de red, por favor intente de nuevo',
      data_provider_error: 'Error del proveedor de datos',
      i18n_error: 'Error cargando traducción',
      canceled: 'Cancelado',
      logged_out: 'Sesión finalizada',
      not_authorized: 'No autorizado',
      application_update_available: 'Actualización de la aplicación disponible',
    },
    page: {
      list: 'Listado de %{name}',
      edit: 'Editar %{name}',
      show: 'Mostrar %{name}',
      create: 'Crear %{name}',
      dashboard: 'Panel de control',
      contacts: 'Contactos',
      companies: 'Empresas',
      stats: 'Estadísticas',
      donations: 'Donaciones',
      not_found: 'Página no encontrada',
      loading: 'Cargando...',
      error: 'Ha ocurrido un error',
      empty: 'No hay elementos disponibles',
      invite: 'Para agregar un elemento presione el botón',
    },
    input: {
      file: {
        upload_several: 'Arrastra varios archivos o haz clic para seleccionarlos.',
        upload_single: 'Arrastra un archivo o haz clic para seleccionarlo.',
      },
      image: {
        upload_several: 'Arrastra varias imágenes o haz clic para seleccionarlas.',
        upload_single: 'Arrastra una imagen o haz clic para seleccionarla.',
      },
      references: {
        all_missing: 'No se encontraron datos de referencia.',
        many_missing: 'Algunas referencias no están disponibles.',
        single_missing: 'Referencia no encontrada',
      },
      password: {
        toggle_visible: 'Mostrar contraseña',
        toggle_hidden: 'Ocultar contraseña',
      },
    },
    auth: {
      user_menu: 'Perfil',
      login: 'Iniciar sesión',
      logout: 'Cerrar sesión',
      username: 'Nombre de usuario',
      password: 'Contraseña',
      sign_in: 'Ingresar',
      auth_check_error: 'Error de autenticación',
      sign_in_error: 'Error al iniciar sesión',
    },
    boolean: {
      true: 'Verdadero',
      false: 'Falso',
      null: 'Nulo',
    },
    message: {
      about: 'Acerca de',
      are_you_sure: '¿Está seguro?',
      auth_error: 'Error de autenticación',
      bulk_delete_content: '¿Estás seguro de que deseas eliminar estos elementos?',
      bulk_delete_title: 'Eliminar varios elementos',
      bulk_update_content: '¿Está seguro de que deseas actualizar estos elementos?',
      bulk_update_title: 'Actualizar varios elementos',
      clear_array_input: 'Borrar entradas del array',
      delete_content: '¿Está seguro de eliminar este elemento?',
      delete_title: 'Eliminar elemento',
      details: 'Detalles',
      error: 'Error',
      invalid_form: 'El formulario no es válido',
      loading: 'Cargando...',
      no: 'No',
      not_found: 'No se encontró',
      yes: 'Sí',
      unsaved_changes: 'Tiene cambios no guardados. ¿Desea continuar sin guardar?',
    },
    navigation: {
      no_results: 'No se encontraron resultados',
      contact_list: 'Lista de contactos',
      company_list: 'Lista de empresas',
      dashboard: 'Panel de control',
      statistics: 'Estadísticas',
      no_more_results: 'No hay más resultados',
      page_out_of_boundaries: 'Página fuera de límites',
      page_out_from_end: 'Página fuera de fin',
      page_out_from_begin: 'Página fuera de inicio',
      page_range_info: '%{offsetBegin}-%{offsetEnd} de %{total}',
      partial_page_range_info: '%{offsetBegin}-%{offsetEnd} de %{total}',
      page_rows_per_page: 'Filas por página',
      current_page: 'Página actual',
      page: 'Página',
      first: 'Primero',
      last: 'Último',
      next: 'Siguiente',
      previous: 'Anterior',
      skip_nav: 'Saltar navegación',
    },
    sort: {
      sort_by: 'Ordenar por %{field}',
      ASC: 'Ascendente',
      DESC: 'Descendente',
    },
    validation: {
      required: 'Requerido',
      minLength: 'Longitud mínima: %{min}',
      maxLength: 'Longitud máxima: %{max}',
      minValue: 'Valor mínimo: %{min}',
      maxValue: 'Valor máximo: %{max}',
      number: 'Debe ser un número',
      email: 'Debe ser un correo electrónico válido',
      oneOf: 'Debe ser uno de: %{options}',
      regex: 'Debe coincidir con el patrón: %{pattern}',
    },
    saved_queries: {
      label: 'Consultas guardadas',
      query_name: 'Nombre de la consulta',
      new_label: 'Nueva consulta',
      new_dialog_title: 'Crear nueva consulta',
      remove_label: 'Eliminar consulta',
      remove_label_with_name: 'Eliminar %{name}',
      remove_dialog_title: 'Eliminar consulta',
      remove_message: '¿Está seguro de eliminar esta consulta?',
      help: 'Ayuda sobre consultas guardadas',
    },
    configurable: {
      customize: 'Personalizar',
      configureMode: 'Modo de configuración',
      inspector: {
        title: 'Inspector',
        content: 'Contenido',
        reset: 'Restablecer',
        hideAll: 'Ocultar todo',
        showAll: 'Mostrar todo',
      },
      Datagrid: {
        title: 'Título',
        unlabeled: 'Sin etiqueta',
      },
      SimpleForm: {
        title: 'Formulario simple',
        unlabeled: 'Sin etiqueta',
      },
      SimpleList: {
        title: 'Lista simple',
        primaryText: 'Texto primario',
        secondaryText: 'Texto secundario',
        tertiaryText: 'Texto terciario',
      },
    },
  }
};
