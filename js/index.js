/* URL PARA CONECTAR A LA BD*/
const urlBase = "http://localhost:8081/api/";
$('#CabanasTable').on('click', 'tbody tr', function (event) {
    $(this).addClass('highlight').siblings().removeClass('highlight');
});
/************************** METODOS CABANAS ***************************/
//TRAER INFORMACION CABANAS
function TablaCabanas() {
    GetCabanasAll().then(function (data) {
        $("#tablaCabana").empty();
        if (data != null) {
            data.forEach(function (element) {
                let row = $("<tr class=\"clickableRow\">");
                row.append($("<td class=\"id\" style=\"display:none;\">").text(element.id));
                row.append($("<td class=\"name\">").text(element.name));
                row.append($("<td class=\"brand\">").text(element.brand));
                row.append($("<td class=\"rooms\">").text(element.rooms));
                row.append($("<td class=\"description\">").text(element.description));
                row.append($("<td class=\"category\">").text(element.category.name));
                $("#tablaCabana").append(row);
            });
        }
    }).catch(function (err) {
        console.error(err);
        alert("Error al consultar cabañas.");
    })
}
//TRAER TODAS LAS CABANAS
function GetCabanasAll() {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: urlBase + "Cabin/all",
            method: "GET",
            dataType: "json",
            success: function (data) {
                resolve(data);
            }, error: function (error) {
                reject(error);
            }
        });
    });
}
//TRAER INFORMACION DE UNA CABANA POR SU ID
function GetCabanaById(IdCabana) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: urlBase + "Cabin/" + IdCabana,
            method: "GET",
            dataType: "json",
            success: function (data) {
                resolve(data);
            },
            error: function (err) {
                reject(err);
            }
        });
    });
}
//INSERTAR INFORMACION A LA TABLA CABANAS
function PostCabana(Nombre, Marca, Habitaciones, Id_Categoria, Descripcion) {
    let cabin = {
        brand: Marca,
        rooms: Habitaciones,
        category: { id: Id_Categoria },
        name: Nombre,
        description: Descripcion
    }
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: urlBase + "Cabin/save",
            method: "POST",
            contentType: 'application/json',
            data: JSON.stringify(cabin),
            success: function (data) {
                resolve(data);
            },
            error: function (err) {
                reject(err);
            }
        });
    });
}
//ACTUALIZAR INFORMACION DE UNA CABANA POR SU ID
function PutCabanaById(IdCabana, Nombre, Marca, Descripcion, Habitaciones) {
    let cabin = {
        id: IdCabana,
        brand: Marca,
        name: Nombre,
        description: Descripcion,
        rooms: Habitaciones
    }
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: urlBase + "Cabin/update",
            method: "PUT",
            contentType: 'application/json',
            data: JSON.stringify(cabin),
            success: function (data) {
                resolve(data);
            },
            error: function (err) {
                reject(err);
            }
        });
    });
}
//ELIMINAR INFORMACION DE UNA CABANA POR SU ID
function DeleteCabanaById(IdCabana) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: urlBase + "Cabin/" + IdCabana,
            method: "DELETE",
            contentType: 'application/json',
            success: function (data) {
                resolve(data);
            },
            error: function (err) {
                reject(err);
            }
        });
    });
}
/************************** METODOS CATEGORIA ***************************/
$('#CategoriaTable').on('click', 'tbody tr', function (event) {
    $(this).addClass('highlight').siblings().removeClass('highlight');
});
//TRAER INFORMACION CATEGORIA
function TablaCategoria() {
    GetCategoriaAll().then(function (data) {
        $("#tablaCategoria").empty();
        if (data != null) {
            data.forEach(function (element) {
                let row = $("<tr class=\"clickableRow\">");
                row.append($("<td class=\"id\" style=\"display:none;\">").text(element.id));
                row.append($("<td>").text(element.name));
                row.append($("<td>").text(element.description));
                $("#tablaCategoria").append(row);
            });
        }
    }).catch(function (err) {
        console.error(err);
        alert("Error al consultar categorias.");
    })
}
//TRAER TODAS LAS CATEGORIAS
function GetCategoriaAll() {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: urlBase + "Category/all",
            method: "GET",
            dataType: "json",
            success: function (data) {
                resolve(data);
            }, error: function (error) {
                reject(error);
            }
        });
    });
}
//TRAER INFORMACION DE UNA CATEGORIA POR SU ID
function GetCategoriaById(IdCategoria) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: urlBase + "Category/" + IdCategoria,
            method: "GET",
            dataType: "json",
            success: function (data) {
                resolve(data);
            },
            error: function (err) {
                reject(err);
            }
        });
    });
}
//INSERTAR INFORMACION A LA TABLA CATEGORIA
function PostCategoria(Nombre, Descripcion) {
    let category = {
        name: Nombre,
        description: Descripcion
    }
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: urlBase + "Category/save",
            method: "POST",
            contentType: 'application/json',
            data: JSON.stringify(category),
            success: function (data) {
                resolve(data);
            },
            error: function (err) {
                reject(err);
            }
        });
    });
}
//ACTUALIZAR INFORMACION DE UNA CATEGORIA POR SU ID
function PutCategoriaById(IdCategoria, Nombre, Descripcion) {
    let category = {
        id: IdCategoria,
        name: Nombre,
        description: Descripcion
    }
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: urlBase + "Category/update",
            method: "PUT",
            contentType: 'application/json',
            data: JSON.stringify(category),
            success: function (data) {
                resolve(data);
            },
            error: function (err) {
                reject(err);
            }
        });
    });
}
//ELIMINAR INFORMACION DE UNA CATEGORIA POR SU ID
function DeleteCategoriaById(IdCategoria) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: urlBase + "Category/" + IdCategoria,
            method: "DELETE",
            contentType: 'application/json',
            success: function (data) {
                resolve(data);
            },
            error: function (err) {
                reject(err);
            }
        });
    });
}
/************************** METODOS CLIENTES ***************************/
$('#ClientesTable').on('click', 'tbody tr', function (event) {
    $(this).addClass('highlight').siblings().removeClass('highlight');
});
//TRAER TODOS LOS CLIENTES
function TablaClientes() {
    GetClientesAll().then(function (data) {
        $("#tablaClientes").empty();
        if (data != null) {
            data.forEach(function (element) {
                let row = $("<tr class=\"clickableRow\">");
                row.append($("<td class=\"id\" style=\"display:none;\">").text(element.idClient));
                row.append($("<td>").text(element.name));
                row.append($("<td>").text(element.email));
                row.append($("<td>").text(element.age));
                $("#tablaClientes").append(row);
            });
        }
    }).catch(function (err) {
        console.error(err);
        alert("Error al consultar clientes.");
    })
}
//TRAER INFORMACION DE TODOS LOS CLIENTES
function GetClientesAll() {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: urlBase + "Client/all",
            method: "GET",
            dataType: "json",
            success: function (data) {
                resolve(data);
            }, error: function (error) {
                reject(error);
            }
        });
    });
}
//TRAER INFORMACION DE UN CLIENTE POR SU ID
function GetClienteById(IdCliente) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: urlBase + "Client/" + IdCliente,
            method: "GET",
            dataType: "json",
            success: function (data) {
                resolve(data);
            },
            error: function (err) {
                reject(err);
            }
        });
    });
}
//INSERTAR INFORMACION A LA TABLA CLIENTE
function PostCliente(Nombre, Email, Edad, Contrasena) {
    let client = {
        name: Nombre,
        email: Email,
        age: Edad,
        password: Contrasena
    }
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: urlBase + "Client/save",
            method: "POST",
            contentType: 'application/json',
            data: JSON.stringify(client),
            success: function (data) {
                resolve(data);
            },
            error: function (err) {
                reject(err);
            }
        });
    });
}
//ACTUALIZAR INFORMACION DE UN CLIENTE POR SU ID
function PutClienteById(IdCliente, Nombre, Password, Edad) {
    let client = {
        idClient: IdCliente,
        name: Nombre,
        password: Password,
        age: Edad
    }
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: urlBase + "Client/update",
            method: "PUT",
            contentType: 'application/json',
            data: JSON.stringify(client),
            success: function (data) {
                resolve(data);
            },
            error: function (err) {
                reject(err);
            }
        });
    });
}
//ELIMINAR INFORMACION DE UN CLIENTE POR SU ID
function DeleteClienteById(IdCliente) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: urlBase + "Client/" + IdCliente,
            method: "DELETE",
            contentType: 'application/json',
            success: function (data) {
                resolve(data);
            },
            error: function (err) {
                reject(err);
            }
        });
    });

}
/************************** METODOS MENSAJES ***************************/
$('#MensajesTable').on('click', 'tbody tr', function (event) {
    $(this).addClass('highlight').siblings().removeClass('highlight');
});
//TRAER INFORMACION MENSAJES
function TablaMensajes() {
    GetMensajeAll().then(function (data) {
        $("#tablaMensajes").empty();
        if (data != null) {
            data.forEach(function (element) {
                let row = $("<tr class=\"clickableRow\">");
                row.append($("<td class=\"id\" style=\"display:none;\">").text(element.idMessage));
                row.append($("<td>").text(element.messageText));
                row.append($("<td>").text(element.cabin.name));
                row.append($("<td>").text(element.client.name));
                $("#tablaMensajes").append(row);
            });
        }
    }).catch(function (err) {
        console.error(err);
        alert("Error al consultar mensajes.");
    })
}
//TRAER TODOS LOS MENSAJES
function GetMensajeAll() {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: urlBase + "Message/all",
            method: "GET",
            dataType: "json",
            success: function (data) {
                resolve(data);
            }, error: function (error) {
                reject(error);
            }
        });
    });
}
//TRAER INFORMACION DE UN MENSAJE POR SU ID
function GetMensajeById(IdMensaje) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: urlBase + "Message/" + IdMensaje,
            method: "GET",
            dataType: "json",
            success: function (data) {
                resolve(data);
            },
            error: function (err) {
                reject(err);
            }
        });
    });
}
//INSERTAR INFORMACION A LA TABLA MENSAJES
function PostMensaje(MensaText, IdCliente, IdCabana) {
    let messagge = {
        messageText: MensaText,
        client: { idClient: IdCliente },
        cabin: { id: IdCabana }
    }
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: urlBase + "Message/save",
            method: "POST",
            contentType: 'application/json',
            data: JSON.stringify(messagge),
            success: function (data) {
                resolve(data);
            },
            error: function (err) {
                reject(err);
            }
        });
    });
}
//ACTUALIZAR INFORMACION DE UN MENSAJE POR SU ID
function PutMensajeById(IdMensaje, TextMensaje) {
    let messagge = {
        idMessage: IdMensaje,
        messageText: TextMensaje
    }
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: urlBase + "Message/update",
            method: "PUT",
            contentType: 'application/json',
            data: JSON.stringify(messagge),
            success: function (data) {
                resolve(data);
            },
            error: function (err) {
                reject(err);
            }
        });
    });
}
//ELIMINAR INFORMACION DE UN MENSAJE POR SU ID
function DeleteMensajeById(IdMensaje) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: urlBase + "Message/" + IdMensaje,
            method: "DELETE",
            contentType: 'application/json',
            success: function (data) {
                resolve(data);
            },
            error: function (err) {
                reject(err);
            }
        });
    });
}
/************************** METODOS ADMIN USER ***************************/
$('#AdminUserTable').on('click', 'tbody tr', function (event) {
    $(this).addClass('highlight').siblings().removeClass('highlight');
});
//TRAER INFORMACION ADMIN USER
function TablaUserAdmin() {
    GetAdminUserAll().then(function (data) {
        $("#tablaAdminUsers").empty();
        if (data != null) {
            data.forEach(function (element) {
                let row = $("<tr class=\"clickableRow\">");
                row.append($("<td class=\"id\" style=\"display:none;\">").text(element.idAdmin));
                row.append($("<td>").text(element.nombre));
                row.append($("<td>").text(element.correo));
                $("#tablaAdminUsers").append(row);
            });
        }
    }).catch(function (err) {
        console.error(err);
        alert("Error al consultar mensajes.");
    })
}
//TRAER TODOS LOS ADMIN USER
function GetAdminUserAll() {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: urlBase + "Admin/all",
            method: "GET",
            dataType: "json",
            success: function (data) {
                resolve(data);
            }, error: function (error) {
                reject(error);
            }
        });
    });
}
//TRAER INFORMACION DE UN ADMIN USER POR SU ID
function GetAdminUserById(IdAdminUser) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: urlBase + "Admin/" + IdAdminUser,
            method: "GET",
            dataType: "json",
            success: function (data) {
                resolve(data);
            },
            error: function (err) {
                reject(err);
            }
        });
    });
}
//INSERTAR INFROMACION A LA TABLA ADMIN USER
function PostAdminUser(Nombre, Correo, Contrasena) {
    let admin = {
        nombre: Nombre,
        correo: Correo,
        contrasena: Contrasena
    }
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: urlBase + "Admin/save",
            method: "POST",
            contentType: 'application/json',
            data: JSON.stringify(admin),
            success: function (data) {
                resolve(data);
            },
            error: function (err) {
                reject(err);
            }
        });
    });
}
//ACTUALIZAR INFROMACION DE UN ADMIN USER POR SU ID
function PutAdminUserById(IdAdminUser, Nombre, Contrasena) {
    let admin = {
        idAdmin: IdAdminUser,
        nombre: Nombre,
        contrasena: Contrasena
    }
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: urlBase + "Admin/update",
            method: "PUT",
            contentType: 'application/json',
            data: JSON.stringify(admin),
            success: function (data) {
                resolve(data);
            },
            error: function (err) {
                reject(err);
            }
        });
    });
}
//ELIMINAR INFORMACION DE UN ADMIN USER POR SU ID
function DeleteAdminUserById(IdAdminUser) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: urlBase + "Admin/" + IdAdminUser,
            method: "DELETE",
            dataType: "json",
            success: function (data) {
                resolve(data);
            },
            error: function (err) {
                reject(err);
            }
        });
    });
}
/*********** METODO PARA SABER EL MODULO DONDE ESTA EL USUARIO ***********/
function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}
var Modulo = "";
var IdData = null;
var DataRowApi = [];
var Opcion;
/************************** EVENTO PARA CARGAR TABLA DEL MODULO ***************************/
document.getElementById('pills-tab').addEventListener("click", function (event) {
    Modulo = getEventTarget(event).innerText;
    if (Modulo == "Cabañas") {
        TablaCabanas();
    } else if (Modulo == "Categoria") {
        TablaCategoria();
    } else if (Modulo == "Clientes") {
        TablaClientes();
    } else if (Modulo == "Mensajes") {
        TablaMensajes();
    } else if (Modulo == "Usuarios Admin") {
        TablaUserAdmin();
    }
});
/************************** EVENTOS BOTONES ***************************/
//EVENTO BOTON ACTUALIZAR
const btnActualizar = document.getElementById("btnActualizar");
btnActualizar.addEventListener("click", function (event) {
    IdData = GetDataRowSelected(Modulo);
    if (IdData != null) {
        Opcion = 0;
        $('#content-popup').empty();
        if (Modulo == "Cabañas") {
            HeaderFooterPopup("Actualizar Cabaña", "Actualizar");
            GetCabanaById(IdData).then(function (data) {
                let MarcaCabin = data.brand;
                let NombreCabin = data.name;
                let HabitacionesCabin = data.rooms;
                let DescripcionCabin = data.description;
                let Content = $("<label class=\"form-label\" style=\"min-width: 100%;\">Nombre:</label>");
                Content.append($("<input type=\"text\" class=\"form-control\" id=\"NomCabin\" placeholder=\"Nombre\" style=\"min-width: 100%;\" value=\"" + NombreCabin + "\" />"));
                Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Marca:</label>"));
                Content.append($("<input type=\"text\" class=\"form-control\" id=\"MarcaCabin\" placeholder=\"Marca\" style=\"min-width: 100%;\" value=\"" + MarcaCabin + "\" />"));
                Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Habitaciones:</label>"));
                Content.append($("<input type=\"number\" class=\"form-control\" id=\"HabiCabin\" placeholder=\"Habitaciones\" style=\"min-width: 100%;\" value=\"" + HabitacionesCabin + "\" />"));
                Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Descripción:</label>"));
                Content.append($("<textarea id=\"ComenCabin\" class=\"form-control\ style=\"min-width: 100%\" rows=\"5\">" + DescripcionCabin + "</textarea>"));
                $('#content-popup').append(Content);
                myModal.show();
            }).catch(function (err) {
                console.error(err);
                alert("Error al consultar Cabaña");
            })
        } else if (Modulo == "Categoria") {
            HeaderFooterPopup("Actualizar Categoria", "Actualizar");
            GetCategoriaById(IdData).then(function (data) {
                let Nombre = data.name;
                let Descripcion = data.description;
                let Content = $("<label class=\"form-label\" style=\"min-width: 100%;\">Nombre:</label>");
                Content.append($("<input type=\"text\" class=\"form-control\" id=\"NomCategory\" placeholder=\"Nombre\" style=\"min-width: 100%;\" value=\"" + Nombre + "\" />"));
                Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Descripción:</label>"));
                Content.append($("<textarea id=\"DescripCategory\" class=\"form-control\ style=\"min-width: 100%\" rows=\"5\">" + Descripcion + "</textarea>"));
                $('#content-popup').append(Content);
                myModal.show();
            }).catch(function (err) {
                console.log(err);
                alert("Error al consultar la categoria.")
            })
        } else if (Modulo == "Clientes") {
            HeaderFooterPopup("Actualizar Cliente", "Actualizar");
            GetClienteById(IdData).then(function (data) {
                let Nombre = data.name;
                let password = data.password;
                let Edad = data.age;
                let Content = $("<label class=\"form-label\" style=\"min-width: 100%;\">Nombre:</label>");
                Content.append($("<input type=\"text\" class=\"form-control\" id=\"NomCli\" placeholder=\"Nombre\" style=\"min-width: 100%;\" value=\"" + Nombre + "\" />"));
                Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Contraseña:</label>"));
                Content.append($("<input type=\"email\" class=\"form-control\" id=\"PassCli\" placeholder=\"Email\" style=\"min-width: 100%;\" value=\"" + password + "\" />"));
                Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Edad:</label>"));
                Content.append($("<input type=\"number\" class=\"form-control\" id=\"EdadCli\" placeholder=\"Edad\" style=\"min-width: 100%;\" value=\"" + Edad + "\" />"));
                $('#content-popup').append(Content);
                myModal.show();
            }).catch(function (err) {
                console.error(err);
                alert("Error al consultar el cliente.");
            })
        } else if (Modulo == "Mensajes") {
            HeaderFooterPopup("Actualizar Mensaje", "Actualizar");
            GetMensajeById(IdData).then(function (data) {
                let MensajeText = data.messageText;
                let Content = $("<label for=\"exampleFormControlTextarea1\" class=\"form-label\">Mensaje:</label><textarea id=\"ValMensaje\" class=\"form-control\ style=\"min-width: 100%\" rows=\"5\">" + MensajeText + "</textarea>");
                $('#content-popup').append(Content);
                myModal.show();
            }).catch(function (err) {
                console.error(err);
                alert("Error al consultar mensaje.");
            })
        } else if (Modulo == "Usuarios Admin") {
            HeaderFooterPopup("Actualizar Usuario Admin", "Actualizar");
            GetAdminUserById(IdData).then(function (data) {
                let NombreAdmin = data.nombre;
                let PassAdmin = data.contrasena;
                let Content = $("<label class=\"form-label\" style=\"min-width: 100%;\">Nombre:</label>");
                Content.append($("<input type=\"text\" class=\"form-control\" id=\"NomAdminUser\" placeholder=\"Nombre\" style=\"min-width: 100%;\" value=\"" + NombreAdmin + "\" />"));
                Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Contraseña:</label>"));
                Content.append($("<input type=\"text\" class=\"form-control\" id=\"PassAdminUser\" placeholder=\"Contraseña\" style=\"min-width: 100%;\" value=\"" + PassAdmin + "\" />"));
                $('#content-popup').append(Content);
                myModal.show();
            }).catch(function (err) {
                console.error(err);
                alert("Error al consultar usaurio admin");
            })
        }
    } else {
        alert("Debe seleccionar " + Modulo);
    }
});
//EVENTO BOTON CREAR
const btnCrear = document.getElementById("btnCrear");
btnCrear.addEventListener("click", function (event) {
    Opcion = 1;
    $('#content-popup').empty();
    if (Modulo == "Cabañas") {
        GetCategoriaAll().then(function (data) {
            if (data.length > 0) {
                HeaderFooterPopup("Crear Cabaña", "Crear");
                let Content = $("<label class=\"form-label\" style=\"min-width: 100%;\">Nombre:</label>");
                Content.append($("<input type=\"text\" class=\"form-control\" id=\"NomCabinCreate\" placeholder=\"Nombre\" style=\"min-width: 100%;\" value=\"\" />"));
                Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Marca:</label>"));
                Content.append($("<input type=\"text\" class=\"form-control\" id=\"MarCabinCreate\" placeholder=\"Marca\" style=\"min-width: 100%;\" value=\"\" />"));
                Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Habitaciones:</label>"));
                Content.append($("<input type=\"number\" class=\"form-control\" id=\"HabiCabinCreate\" placeholder=\"Habitaciones\" style=\"min-width: 100%;\" value=\"\" />"));
                Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Categoria:</label>"));
                Content.append($("<select class=\"form-select\" aria-label=\"Default select example\" id=\"CateCabinCreate\" style=\"min-width: 100%;\" />"));
                Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Descripción:</label>"));
                Content.append($("<textarea id=\"DescripCabinCreate\" class=\"form-control\ style=\"min-width: 100%\" rows=\"4\"></textarea>"));
                $('#content-popup').append(Content);
                data.forEach(function (element) {
                    let OptionItem = $("<option>");
                    OptionItem.attr('value', element.id);
                    OptionItem.text(element.name);
                    $("#CateCabinCreate").append(OptionItem);
                });
                myModal.show();
            } else {
                alert("Debe crear al menos una categoria para crear una cabaña.");
            }
        }).catch(function (err) {
            console.error(err);
            alert("Error al consultar categorias para asignar.");
        })
    } else if (Modulo == "Categoria") {
        HeaderFooterPopup("Crear Categoria", "Crear");
        let Content = $("<label class=\"form-label\" style=\"min-width: 100%;\">Nombre:</label>");
        Content.append($("<input type=\"text\" class=\"form-control\" id=\"NomCategoryCreate\" placeholder=\"Nombre\" style=\"min-width: 100%;\" value=\"\" />"));
        Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Descripción:</label>"));
        Content.append($("<textarea id=\"DescripCategoryCreate\" class=\"form-control\ style=\"min-width: 100%\" rows=\"5\"></textarea>"));
        $('#content-popup').append(Content);
        myModal.show();
    } else if (Modulo == "Clientes") {
        HeaderFooterPopup("Crear Cliente", "Crear");
        let Content = $("<label class=\"form-label\" style=\"min-width: 100%;\">Nombre:</label>");
        Content.append($("<input type=\"text\" class=\"form-control\" id=\"NomCliCreate\" placeholder=\"Nombre\" style=\"min-width: 100%;\" value=\"\" />"));
        Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Email:</label>"));
        Content.append($("<input type=\"email\" class=\"form-control\" id=\"EmailCliCreate\" placeholder=\"Email\" style=\"min-width: 100%;\" value=\"\" />"));
        Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Contraseña:</label>"));
        Content.append($("<input type=\"text\" class=\"form-control\" id=\"PassCliCreate\" placeholder=\"Contraseña\" style=\"min-width: 100%;\" value=\"\" />"));
        Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Edad:</label>"));
        Content.append($("<input type=\"number\" class=\"form-control\" id=\"EdadCliCreate\" placeholder=\"Edad\" style=\"min-width: 100%;\" value=\"\" />"));
        $('#content-popup').append(Content);
        myModal.show();
    } else if (Modulo == "Mensajes") {
        GetCabanasAll().then(function (dataCabin) {
            console.log(dataCabin);
            if (dataCabin.length > 0) {
                GetClientesAll().then(function (dataClient) {
                    if (dataClient.length > 0) {
                        HeaderFooterPopup("Crear Mensaje", "Crear");
                        let Content = ($("<label class=\"form-label\" style=\"min-width: 100%;\">Cabaña:</label>"));
                        Content.append($("<select class=\"form-select\" aria-label=\"Default select example\" id=\"MessaCabinCreate\"  style=\"min-width: 100%;\" />"));
                        Content.append($("<label for=\"exampleFormControlTextarea1\" class=\"form-label\">Cliente:</label>"));
                        Content.append($("<select class=\"form-select\" aria-label=\"Default select example\" id=\"MessaClientCreate\"  style=\"min-width: 100%;\" />"));
                        Content.append($("<label for=\"exampleFormControlTextarea1\" class=\"form-label\">Mensaje:</label>"));
                        Content.append($("<textarea id=\"CreateMensaje\" class=\"form-control\ style=\"min-width: 100%\" rows=\"4\"></textarea>"));
                        $('#content-popup').append(Content);
                        dataCabin.forEach(function (element) {
                            let OptionItem = $("<option>");
                            OptionItem.attr('value', element.id);
                            OptionItem.text(element.name);
                            $("#MessaCabinCreate").append(OptionItem);
                        });
                        dataClient.forEach(function (element) {
                            let OptionItem = $("<option>");
                            OptionItem.attr('value', element.idClient);
                            OptionItem.text(element.name);
                            $("#MessaClientCreate").append(OptionItem);
                        });
                        myModal.show();
                    } else {
                        alert("Debe crear al menos un cliente para ingresar mensajes.");
                    }
                }).catch(function (err) {
                    console.error(err);
                    alert("Error al consultar clientes.");
                })
            } else {
                alert("Debe crear al menos una cabaña para ingresar mensajes.");
            }
        }).catch(function (err) {
            console.error(err);
            alert("Error al consultar cabañas.");
        })

    } else if (Modulo == "Usuarios Admin") {
        HeaderFooterPopup("Crear User Admin", "Crear");
        let Content = $("<label class=\"form-label\" style=\"min-width: 100%;\">Nombre:</label>");
        Content.append($("<input type=\"text\" class=\"form-control\" id=\"NomAdminCreate\" placeholder=\"Nombre\" style=\"min-width: 100%;\" value=\"\" />"));
        Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Correo:</label>"));
        Content.append($("<input type=\"text\" class=\"form-control\" id=\"CorreoAdminCreate\" placeholder=\"Correo\" style=\"min-width: 100%;\" value=\"\" />"));
        Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Contraseña:</label>"));
        Content.append($("<input type=\"text\" class=\"form-control\" id=\"PassAdminCreate\" placeholder=\"Contraseña\" style=\"min-width: 100%;\" value=\"\" />"));
        $('#content-popup').append(Content);
        myModal.show();
    }
});
//EVENTO BOTON ELIMINAR
const btnEliminar = document.getElementById("btnEliminar");
btnEliminar.addEventListener("click", function (event) {
    IdData = GetDataRowSelected(Modulo);
    if (IdData != null) {
        if (Modulo == "Cabañas") {
            GetCabanaById(IdData).then(function (data) {
                let NombreCabana = data.brand;
                if (confirm('¿Desea eliminar la cabaña ' + NombreCabana + '?')) {
                    DeleteCabanaById(IdData).then(function () {
                        TablaCabanas();
                        alert("Cabaña " + NombreCabana + " eliminada correctamente.");
                    }).catch(function (err) {
                        console.log(err);
                        alert("No se pudo eliminar la cabaña.");
                    })
                }
            }).catch(function (err) {
                console.error(err);
                alert("Error al consultar la cabaña. Id: " + IdData);
            })
        } else if (Modulo == "Categoria") {
            GetCategoriaById(IdData).then(function (data) {
                let NombreCategoria = data.name;
                if (confirm('¿Desea eliminar la categoria ' + NombreCategoria + '?')) {
                    DeleteCategoriaById(IdData).then(function () {
                        TablaCategoria();
                        alert("Categoria " + NombreCategoria + " eliminada correctamente.");
                    }).catch(function (err) {
                        console.log(err);
                        alert("No se pudo eliminar la Categoria.");
                    })
                }
            }).catch(function (err) {
                console.error(err);
                alert("Error al consultar la categoria. Id: " + IdData);
            })
        } else if (Modulo == "Clientes") {
            GetClienteById(IdData).then(function (data) {
                let NombreCliente = data.name;
                if (confirm('¿Desea eliminar el cliente ' + NombreCliente + '?')) {
                    DeleteClienteById(IdData).then(function () {
                        TablaClientes();
                        alert("Cliente " + NombreCliente + " eliminado correctamente.");
                    }).catch(function (err) {
                        console.log(err);
                        alert("No se pudo eliminar el cliente.");
                    })
                }
            }).catch(function (err) {
                console.log(err);
                alert("Error al consultar el cliehte. Id: " + IdData);
            })
        } else if (Modulo == "Mensajes") {
            GetMensajeById(IdData).then(function (data) {
                let MensajeText = data.messageText;
                if (confirm('¿Desea eliminar el mensaje \"' + MensajeText + '\"?')) {
                    DeleteMensajeById(IdData).then(function () {
                        TablaMensajes();
                        alert("Mensaje \"" + MensajeText + "\" eliminado correctamente.");
                    }).catch(function (err) {
                        console.log(err);
                        alert("No se pudo eliminar el mensaje.");
                    })
                }
            }).catch(function (err) {
                console.error(err);
                alert("Error al consultar el mensaje. Id: " + IdData);
            })
        } else if (Modulo == "Usuarios Admin") {
            GetAdminUserById(IdData).then(function (data) {
                let NombreUserAd = data.nombre;
                if (confirm('Desea eliminar el usuario administrador ' + NombreUserAd + '?')) {
                    DeleteAdminUserById(IdData).then(function () {
                        TablaUserAdmin();
                        alert("Usuario Admin " + NombreUserAd + " eliminada correctamente.");
                    }).catch(function (err) {
                        console.error(err);
                        alert("No se pudo eliminar usuario.");
                    })
                }
            }).catch(function (err) {
                console.error(err);
                alert("Error al consultar el usuario admin.");
            })
        }
    } else {
        alert("Debe seleccionar " + Modulo);
    }
});
//EVENTO BOTON POPUP SALVAR
const btnSalvar = document.getElementById("Salvar");
btnSalvar.addEventListener("click", function (event) {
    if (Opcion == 0) {
        IdData = GetDataRowSelected(Modulo);
        if (IdData != null) {
            if (Modulo == "Cabañas") {
                let NombreCabin = $('#NomCabin').val();
                let MarcaCabin = $('#MarcaCabin').val();
                let HabitaCabin = $('#HabiCabin').val();
                let ComentCabin = $('#ComenCabin').val();
                if (NombreCabin != "" && MarcaCabin != "" && HabitaCabin != "" && ComentCabin != "") {
                    if (confirm("¿Esta seguro que desea actualizar la cabaña?")) {
                        PutCabanaById(IdData, NombreCabin, MarcaCabin, ComentCabin, HabitaCabin).then(function () {
                            TablaCabanas();
                            alert("Cabaña actualizada correctamente.");
                            myModal.hide();
                        }).catch(function (err) {
                            console.error(err);
                            alert("No se pudo actualizar la Cabaña.");
                        })
                    }
                } else {
                    alert("Todos los campos son obligatorios.");
                }
            } else if (Modulo == "Categoria") {
                let NombreCat = $('#NomCategory').val();
                let DescripCat = $('#DescripCategory').val();
                if (NombreCat != "" && DescripCat != "") {
                    if (confirm("¿Esta seguro que desea actualizar la categoria?")) {
                        PutCategoriaById(IdData, NombreCat, DescripCat).then(function () {
                            TablaCategoria();
                            alert("Categoria actualizada correctamente.");
                            myModal.hide();
                        }).catch(function (err) {
                            console.error(err);
                            alert("No se pudo actualizar la categoria.");
                        })
                    }
                } else {
                    alert("Todos los campos son obligatorios.");
                }
            } else if (Modulo == "Clientes") {
                let NombreCli = $('#NomCli').val();
                let PassCli = $('#PassCli').val();
                let EdadCli = $('#EdadCli').val();
                if (NombreCli != "" && PassCli != "" && EdadCli != "") {
                    if (confirm("¿Esta seguro que desea actualizar el cliente?")) {
                        PutClienteById(IdData, NombreCli, PassCli, EdadCli).then(function () {
                            TablaClientes();
                            alert("Cliente actualizado correctamente.");
                            myModal.hide();
                        }).catch(function (err) {
                            console.log(err);
                            alert("Error al consultar Cliente.");
                        })
                    }
                } else {
                    alert("Todos los campos son obligatorios.");
                }
            } else if (Modulo == "Mensajes") {
                let MensajeMen = $('#ValMensaje').val();
                if (MensajeMen != "") {
                    if (confirm("¿Esta seguro que desea actualizar el mensaje?")) {
                        PutMensajeById(IdData, MensajeMen).then(function () {
                            TablaMensajes();
                            alert("Mensaje actualizado correctamente.");
                            myModal.hide();
                        }).catch(function (err) {
                            console.error(err);
                            alert("No se ha podido actualizar el mensaje.");
                        })
                    }
                } else {
                    alert("Todos los campos son obligatorios.");
                }
            } else if (Modulo == "Usuarios Admin") {
                let NombreUser = $('#NomAdminUser').val();
                let PassUser = $('#PassAdminUser').val();
                if (NombreUser != "" && PassUser != "") {
                    if (confirm("¿Esta seguro que desea actualizar el usuario administrador?")) {
                        PutAdminUserById(IdData, NombreUser, PassUser).then(function () {
                            TablaUserAdmin();
                            alert("Usuario actualizado correctamente.");
                            myModal.hide();
                        }).catch(function (err) {
                            console.error(err);
                            alert("No se puedo actualizar el usuario.");
                        })
                    }
                } else {
                    alert("Todos los campos son obligatorios.");
                }
            }
        }
    } else if (Opcion == 1) {
        if (Modulo == "Cabañas") {
            let NombreCabin = $('#NomCabinCreate').val();
            let BrandCabin = $('#MarCabinCreate').val();
            let HabitaCabin = $('#HabiCabinCreate').val();
            let Id_CatCabin = $('#CateCabinCreate').val();
            let DescripCabin = $('#DescripCabinCreate').val();
            if (NombreCabin != "" && BrandCabin != "" && HabitaCabin != "" && Id_CatCabin != "" && DescripCabin != "") {
                PostCabana(NombreCabin, BrandCabin, HabitaCabin, Id_CatCabin, DescripCabin).then(function () {
                    TablaCabanas();
                    alert("Cabaña creada correctamente.");
                    myModal.hide();
                }).catch(function (err) {
                    console.error(err);
                    alert("Error al crear Cabaña.");
                })
            } else {
                alert("Todos los campos son obligatorios.");
            }
        } else if (Modulo == "Categoria") {
            let NombreCat = $('#NomCategoryCreate').val();
            let DescripCat = $('#DescripCategoryCreate').val();
            if (NombreCat != "" && DescripCat != "") {
                PostCategoria(NombreCat, DescripCat).then(function () {
                    TablaCategoria();
                    alert("Categoria creada correctamente.");
                    myModal.hide();
                }).catch(function (err) {
                    console.error(err);
                    alert("No se pudo crear la categoria.");
                })
            } else {
                alert("Todos los campos son obligatorios.");
            }
        } else if (Modulo == "Clientes") {
            let NombreCli = $('#NomCliCreate').val();
            let EmailCli = $('#EmailCliCreate').val();
            let EdadCli = $('#EdadCliCreate').val();
            let PassCli = $('#PassCliCreate').val();
            if (NombreCli != "" && EmailCli != "" && EdadCli != "" && PassCli != "") {
                PostCliente(NombreCli, EmailCli, EdadCli, PassCli).then(function () {
                    TablaClientes();
                    alert("Cliente creado correctamente.");
                    myModal.hide();
                }).catch(function (err) {
                    console.error(err);
                    alert("No se pudo crear el cliente.");
                })
            } else {
                alert("Todos los campos son obligatorios.");
            }
        } else if (Modulo == "Mensajes") {
            let MensajeMen = $('#CreateMensaje').val();
            let MensajeIdCliente = $('#MessaClientCreate').val();
            let MensajeIdCabana = $('#MessaCabinCreate').val();
            if (MensajeMen != "" && MensajeIdCliente != "" && MensajeIdCabana != "") {
                PostMensaje(MensajeMen, MensajeIdCliente, MensajeIdCabana).then(function () {
                    TablaMensajes();
                    alert("Mensaje creado correctamente.");
                    myModal.hide();
                }).catch(function (err) {
                    console.error(err);
                    alert("Error al crear mensaje.");
                })
            } else {
                alert("Todos los campos son obligatorios.");
            }
        } else if (Modulo == "Usuarios Admin") {
            let NombreUser = $('#NomAdminCreate').val();
            let CorreoUser = $('#CorreoAdminCreate').val();
            let PassUser = $('#PassAdminCreate').val();
            if (NombreUser != "" && CorreoUser != "" && PassUser != "") {
                PostAdminUser(NombreUser, CorreoUser, PassUser).then(function () {
                    TablaUserAdmin();
                    alert("User Admin creado correctamente.");
                    myModal.hide();
                }).catch(function (err) {
                    console.error(err);
                    alert("Error al crear Admin User");
                })
            } else {
                alert("Todos los campos son obligatorios.");
            }
        }
    }
});
var SelectedRow = null;
/*********** OBTENER INFORMACION DE LA LINEA SELECCIONADA ***********/
function GetDataRowSelected(param) {
    let Id = null;
    let TableSelected = (param == "Cabañas") ? '#tablaCabana' : (param == "Categoria") ? "#tablaCategoria" : (param == "Clientes") ? '#tablaClientes' : (param == "Mensajes") ? '#tablaMensajes' : '';
    TableSelected += ' .highlight';
    $(TableSelected).each(function () {
        Id = $(this).find(".id").html();
    });
    return Id;
}
/*********** OBTENER MODAL PARA ACTUALIZAR Y CREAR INFORMACION ***********/
var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
    keyboard: false
})
//CAMBIAR EL TITULO Y EL NOMBRE DE BOTONES DEL MODAL
function HeaderFooterPopup(tittle, modebutton) {
    document.getElementsByClassName('modal-title')[0].innerHTML = tittle;
    document.getElementById('Salvar').innerHTML = modebutton;
}
//METODO QUE SE EJECUTA AL CARGAR LA PAGINA
$(document).ready(function () {
    TablaCabanas();
    Modulo = "Cabañas";
});