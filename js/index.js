//URL para acceder a la BD
const urlBase = "https://g651f78cf1701ef-bdalquilercabanas.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/";
$('#CabanasTable').on('click', 'tbody tr', function (event) {
    $(this).addClass('highlight').siblings().removeClass('highlight');
});
//METODOS CABANAS
function TablaCabanas() {
    $.ajax({
        url: urlBase + "cabin/cabin",
        method: "GET",
        dataType: "json",
        success: function (response) {
            $("#tablaCabana").empty();
            response.items.forEach(element => {
                let row = $("<tr class=\"clickableRow\">");
                row.append($("<td class=\"id\">").text(element.id));
                row.append($("<td class=\"brand\">").text(element.brand));
                row.append($("<td class=\"rooms\">").text(element.rooms));
                row.append($("<td class=\"category_id\">").text(element.category_id));
                row.append($("<td class=\"name\">").text(element.name));
                $("#tablaCabana").append(row);
            });
        }, error: function (error) {
            console.error(error);
        }
    });
}
function GetCabanaById(IdCabana) {
    return $.ajax({
        url: urlBase + "cabin/cabin/" + IdCabana,
        method: "GET",
        dataType: "json"
    });
}
function PutCabanaById(IdCabana, Nombre, Habitaciones, Id_Categoria, Comentarios) {
    let cabin = {
        id: IdCabana,
        brand: Nombre,
        rooms: Habitaciones,
        category_id: Id_Categoria,
        name: Comentarios
    }
    return $.ajax({
        url: urlBase + "cabin/cabin",
        method: "PUT",
        contentType: 'application/json',
        data: JSON.stringify(cabin)
    });
}
function DeleteCabanaById(IdCabana) {
    let cabin = {
        id: IdCabana
    }
    return $.ajax({
        url: urlBase + "cabin/cabin",
        method: "DELETE",
        contentType: 'application/json',
        data: JSON.stringify(cabin)
    });
}
//METODOS CATEGORIA
$('#CategoriaTable').on('click', 'tbody tr', function (event) {
    $(this).addClass('highlight').siblings().removeClass('highlight');
});
function TablaCategoria() {
    $.ajax({
        url: urlBase + "category/category",
        method: "GET",
        dataType: "json",
        success: function (response) {
            $("#tablaCategoria").empty();
            response.items.forEach(element => {
                let row = $("<tr class=\"clickableRow\">");
                row.append($("<td class=\"id\">").text(element.id));
                row.append($("<td>").text(element.name));
                row.append($("<td>").text(element.description));
                $("#tablaCategoria").append(row);
            });
        }, error: function (error) {
            console.error(error);
        }
    });
}
function GetCategoriaById(IdCategoria) {
    return $.ajax({
        url: urlBase + "category/category/" + IdCategoria,
        method: "GET",
        dataType: "json"
    });
}
function GetCategoriaEndId() {
    return $.ajax({
        url: urlBase + "category/count/1",
        method: "GET",
        dataType: "json"
    });
}
function PostCategoria(IdCategoria, Nombre, Descripcion) {
    let category = {
        id: IdCategoria,
        name: Nombre,
        description: Descripcion
    }
    return $.ajax({
        url: urlBase + "category/category",
        method: "POST",
        contentType: 'application/json',
        data: JSON.stringify(category)
    });
}
function PutCategoriaById(IdCategoria, Nombre, Descripcion) {
    let category = {
        id: IdCategoria,
        name: Nombre,
        description: Descripcion
    }
    return $.ajax({
        url: urlBase + "category/category",
        method: "PUT",
        contentType: 'application/json',
        data: JSON.stringify(category)
    });
}
function DeleteCategoriaById(IdCategoria) {
    let category = {
        id: IdCategoria
    }
    return $.ajax({
        url: urlBase + "category/category",
        method: "DELETE",
        contentType: 'application/json',
        data: JSON.stringify(category)
    });
}
//METODOS CLIENTES
$('#ClientesTable').on('click', 'tbody tr', function (event) {
    $(this).addClass('highlight').siblings().removeClass('highlight');
});
function TablaClientes() {
    $.ajax({
        url: urlBase + "client/client",
        method: "GET",
        dataType: "json",
        success: function (response) {
            $("#tablaClientes").empty();
            response.items.forEach(element => {
                let row = $("<tr class=\"clickableRow\">");
                row.append($("<td class=\"id\">").text(element.id));
                row.append($("<td>").text(element.name));
                row.append($("<td>").text(element.email));
                row.append($("<td>").text(element.age));
                $("#tablaClientes").append(row);
            });
        }, error: function (error) {
            console.error(error);
        }
    });
}
function GetClienteById(IdCliente) {
    return $.ajax({
        url: urlBase + "client/client/" + IdCliente,
        method: "GET",
        dataType: "json"
    });
}
function GetClienteEndId() {
    return $.ajax({
        url: urlBase + "client/count/1",
        method: "GET",
        dataType: "json"
    });
}
function PostCliente(IdCliente, Nombre, Email, Edad) {
    let client = {
        id: IdCliente,
        name: Nombre,
        email: Email,
        age: Edad
    }
    return $.ajax({
        url: urlBase + "client/client",
        method: "POST",
        contentType: 'application/json',
        data: JSON.stringify(client)
    });
}
function PutClienteById(IdCliente, Nombre, Email, Edad) {
    let client = {
        id: IdCliente,
        name: Nombre,
        email: Email,
        age: Edad
    }
    return $.ajax({
        url: urlBase + "client/client",
        method: "PUT",
        contentType: 'application/json',
        data: JSON.stringify(client)
    });
}
function DeleteClienteById(IdCliente) {
    let client = {
        id: IdCliente
    }
    return $.ajax({
        url: urlBase + "client/client",
        method: "DELETE",
        contentType: 'application/json',
        data: JSON.stringify(client)
    });
}
//METODOS MENSAJES
$('#MensajesTable').on('click', 'tbody tr', function (event) {
    $(this).addClass('highlight').siblings().removeClass('highlight');
});
function TablaMensajes() {
    $.ajax({
        url: urlBase + "message/message",
        method: "GET",
        dataType: "json",
        success: function (response) {
            $("#tablaMensajes").empty();
            response.items.forEach(element => {
                let row = $("<tr class=\"clickableRow\">");
                row.append($("<td class=\"id\">").text(element.id));
                row.append($("<td>").text(element.messagetext));
                $("#tablaMensajes").append(row);
            });
        }, error: function (error) {
            console.error(error);
        }
    });
}
function GetMensajeById(IdMensaje) {
    return $.ajax({
        url: urlBase + "message/message/" + IdMensaje,
        method: "GET",
        dataType: "json"
    });
}
function GetMensajeEndId() {
    return $.ajax({
        url: urlBase + "message/count/1",
        method: "GET",
        dataType: "json"
    });
}
function PostMensaje(IdMen, MensaText) {
    let messagge = {
        id: IdMen,
        messagetext: MensaText
    }
    return $.ajax({
        url: urlBase + "message/message",
        method: "POST",
        contentType: 'application/json',
        data: JSON.stringify(messagge)
    });
}
function PutMensajeById(IdMensaje, TextMensaje) {
    let messagge = {
        id: IdMensaje,
        messagetext: TextMensaje
    }
    return $.ajax({
        url: urlBase + "message/message",
        method: "PUT",
        contentType: 'application/json',
        data: JSON.stringify(messagge)
    });
}
function DeleteMensajeById(IdMensaje) {
    let messagge = {
        id: IdMensaje
    }
    return $.ajax({
        url: urlBase + "message/message",
        method: "DELETE",
        contentType: 'application/json',
        data: JSON.stringify(messagge)
    });
}
//METODO PARA SABER EL MODULO DONDE ESTA EL USUARIO
function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}
//EVENTOS BOTONES
var Modulo = "";
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
    }
});
var IdData = null;
var DataRowApi = [];
var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
    keyboard: false
})
var Opcion;
//EVENTO BOTON ACTUALIZAR
const btnActualizar = document.getElementById("btnActualizar");
btnActualizar.addEventListener("click", function (event) {
    IdData = GetDataRowSelected(Modulo);
    if (IdData != null) {
        Opcion = 0;
        $('#content-popup').empty();
        if (Modulo == "Cabañas") {
            HeaderFooterPopup("Actualizar Cabaña", "Actualizar");
            $.when(GetCabanaById(IdData)).done(function (element) {
                if (element.items.length > 0) {
                    let NombreCabin = element.items[0].brand;
                    let HabitacionesCabin = element.items[0].rooms;
                    let IdCategoriaCabin = element.items[0].category_id;
                    let ComentariosCabin = element.items[0].name;
                    let Content = $("<label class=\"form-label\" style=\"min-width: 100%;\">Nombre:</label>");
                    Content.append($("<input type=\"text\" class=\"form-control\" id=\"NomCabin\" placeholder=\"Nombre\" style=\"min-width: 100%;\" value=\"" + NombreCabin + "\" />"));
                    Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Habitaciones:</label>"));
                    Content.append($("<input type=\"number\" class=\"form-control\" id=\"HabiCabin\" placeholder=\"Edad\" style=\"min-width: 100%;\" value=\"" + HabitacionesCabin + "\" />"));
                    Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Id Categoria:</label>"));
                    Content.append($("<input type=\"number\" class=\"form-control\" id=\"CateCabin\" placeholder=\"Edad\" style=\"min-width: 100%;\" value=\"" + IdCategoriaCabin + "\" />"));
                    Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Comentarios:</label>"));
                    Content.append($("<textarea id=\"ComenCabin\" class=\"form-control\ style=\"min-width: 100%\" rows=\"5\">" + ComentariosCabin + "</textarea>"));
                    $('#content-popup').append(Content);
                    myModal.show();
                } else {
                    alert("Error al consultar el categoria. Id: " + IdData);
                }
            });
        } else if (Modulo == "Categoria") {
            HeaderFooterPopup("Actualizar Categoria", "Actualizar");
            $.when(GetCategoriaById(IdData)).done(function (element) {
                if (element.items.length > 0) {
                    let Nombre = element.items[0].name;
                    let Descripcion = element.items[0].description;
                    let Content = $("<label class=\"form-label\" style=\"min-width: 100%;\">Nombre:</label>");
                    Content.append($("<input type=\"text\" class=\"form-control\" id=\"NomCategory\" placeholder=\"Nombre\" style=\"min-width: 100%;\" value=\"" + Nombre + "\" />"));
                    Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Descripción:</label>"));
                    Content.append($("<textarea id=\"DescripCategory\" class=\"form-control\ style=\"min-width: 100%\" rows=\"5\">" + Descripcion + "</textarea>"));
                    $('#content-popup').append(Content);
                    myModal.show();
                } else {
                    alert("Error al consultar el categoria. Id: " + IdData);
                }
            });
        } else if (Modulo == "Clientes") {
            HeaderFooterPopup("Actualizar Cliente", "Actualizar");
            $.when(GetClienteById(IdData)).done(function (element) {
                if (element.items.length > 0) {
                    let Nombre = element.items[0].name;
                    let Email = element.items[0].email;
                    let Edad = element.items[0].age;
                    let Content = $("<label class=\"form-label\" style=\"min-width: 100%;\">Nombre:</label>");
                    Content.append($("<input type=\"text\" class=\"form-control\" id=\"NomCli\" placeholder=\"Nombre\" style=\"min-width: 100%;\" value=\"" + Nombre + "\" />"));
                    Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Email:</label>"));
                    Content.append($("<input type=\"email\" class=\"form-control\" id=\"EmailCli\" placeholder=\"Email\" style=\"min-width: 100%;\" value=\"" + Email + "\" />"));
                    Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Edad:</label>"));
                    Content.append($("<input type=\"number\" class=\"form-control\" id=\"EdadCli\" placeholder=\"Edad\" style=\"min-width: 100%;\" value=\"" + Edad + "\" />"));
                    $('#content-popup').append(Content);
                    myModal.show();
                } else {
                    alert("Error al consultar el mensaje. Id: " + IdData);
                }
            });
        } else if (Modulo == "Mensajes") {
            HeaderFooterPopup("Actualizar Mensaje", "Actualizar");
            $.when(GetMensajeById(IdData)).done(function (element) {
                if (element.items.length > 0) {
                    let MensajeText = element.items[0].messagetext;
                    let Content = $("<label for=\"exampleFormControlTextarea1\" class=\"form-label\">Mensaje:</label><textarea id=\"ValMensaje\" class=\"form-control\ style=\"min-width: 100%\" rows=\"5\">" + MensajeText + "</textarea>");
                    $('#content-popup').append(Content);
                    myModal.show();
                } else {
                    alert("Error al consultar el mensaje. Id: " + IdData);
                }
            });
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
        HeaderFooterPopup("Crear Cabaña", "Crear");
        let Content = $("<label class=\"form-label\" style=\"min-width: 100%;\">Nombre:</label>");
        Content.append($("<input type=\"text\" class=\"form-control\" id=\"NomCabin\" placeholder=\"Nombre\" style=\"min-width: 100%;\" value=\"\" />"));
        Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Habitaciones:</label>"));
        Content.append($("<input type=\"number\" class=\"form-control\" id=\"HabiCabin\" placeholder=\"Edad\" style=\"min-width: 100%;\" value=\"\" />"));
        Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Id Categoria:</label>"));
        Content.append($("<input type=\"number\" class=\"form-control\" id=\"CateCabin\" placeholder=\"Edad\" style=\"min-width: 100%;\" value=\"\" />"));
        Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Comentarios:</label>"));
        Content.append($("<textarea id=\"ComenCabin\" class=\"form-control\ style=\"min-width: 100%\" rows=\"5\"></textarea>"));
        $('#content-popup').append(Content);
        myModal.show();
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
        Content.append($("<label class=\"form-label\" style=\"min-width: 100%;\">Edad:</label>"));
        Content.append($("<input type=\"number\" class=\"form-control\" id=\"EdadCliCreate\" placeholder=\"Edad\" style=\"min-width: 100%;\" value=\"\" />"));
        $('#content-popup').append(Content);
        myModal.show();
    } else if (Modulo == "Mensajes") {
        HeaderFooterPopup("Crear Mensaje", "Crear");
        let Content = $("<label for=\"exampleFormControlTextarea1\" class=\"form-label\">Mensaje:</label><textarea id=\"CreateMensaje\" class=\"form-control\ style=\"min-width: 100%\" rows=\"5\"></textarea>");
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
            $.when(GetCabanaById(IdData)).done(function (element) {
                if (element.items.length > 0) {
                    let NombreCabana = element.items[0].brand;
                    if (confirm('¿Desea eliminar la cabaña ' + NombreCabana + '?')) {
                        $.when(DeleteCabanaById(IdData)).then(function (data, textStatus, jqXHR) {
                            if (jqXHR.status == "200" || jqXHR.status == "204") {
                                TablaCabanas();
                                alert("Cabaña " + NombreCabana + " eliminada correctamente.");
                            } else {
                                alert("No se pudo eliminar la cabaña. Error: " + textStatus);
                            }
                        });
                    }
                } else {
                    alert("Error al consultar la cabaña. Id: " + IdData);
                }
            });
        } else if (Modulo == "Categoria") {
            $.when(GetCategoriaById(IdData)).done(function (element) {
                if (element.items.length > 0) {
                    let NombreCategoria = element.items[0].name;
                    if (confirm('¿Desea eliminar la categoria ' + NombreCategoria + '?')) {
                        $.when(DeleteCategoriaById(IdData)).then(function (data, textStatus, jqXHR) {
                            if (jqXHR.status == "200" || jqXHR.status == "204") {
                                TablaCategoria();
                                alert("Categoria " + NombreCabana + " eliminada correctamente.");
                            } else {
                                alert("No se pudo eliminar la Categoria. Error: " + textStatus);
                            }
                        });
                    }
                } else {
                    alert("Error al consultar la categoria. Id: " + IdData);
                }
            });
        } else if (Modulo == "Clientes") {
            $.when(GetClienteById(IdData)).done(function (element) {
                if (element.items.length > 0) {
                    let NombreCliente = element.items[0].name;
                    if (confirm('¿Desea eliminar el cliente ' + NombreCliente + '?')) {
                        $.when(DeleteClienteById(IdData)).then(function (data, textStatus, jqXHR) {
                            if (jqXHR.status == "200" || jqXHR.status == "204") {
                                TablaClientes();
                                alert("Cliente " + NombreCliente + " eliminado correctamente.");
                            } else {
                                alert("No se pudo eliminar el cliente. Error: " + textStatus);
                            }
                        });
                    }
                } else {
                    alert("Error al consultar el cliehte. Id: " + IdData);
                }
            });
        } else if (Modulo == "Mensajes") {
            $.when(GetMensajeById(IdData)).done(function (element) {
                if (element.items.length > 0) {
                    let MensajeText = element.items[0].messagetext;
                    if (confirm('¿Desea eliminar el mensaje ' + MensajeText + '?')) {
                        $.when(DeleteMensajeById(IdData)).then(function (data, textStatus, jqXHR) {
                            if (jqXHR.status == "200" || jqXHR.status == "204") {
                                TablaMensajes();
                                alert("Mensaje " + MensajeText + " eliminado correctamente.");
                            } else {
                                alert("No se pudo eliminar el mensaje. Error: " + textStatus);
                            }
                        });
                    }
                } else {
                    alert("Error al consultar el mensaje. Id: " + IdData);
                }
            });
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
                if (confirm("¿Esta seguro que desea actualizar la cabaña?")) {
                    let NombreCabin = $('#NomCabin').val();
                    let HabitaCabin = $('#HabiCabin').val();
                    let Id_CatCabin = $('#CateCabin').val();
                    let ComentCabin = $('#ComenCabin').val();
                    $.when(PutCabanaById(IdData, NombreCabin, HabitaCabin, Id_CatCabin, ComentCabin)).then(function (data, textStatus, jqXHR) {
                        if (jqXHR.status == "200" || jqXHR.status == "204" || jqXHR.status == "201") {
                            TablaCabanas();
                            alert("Cabaña actualizada correctamente.");
                            myModal.hide();
                        } else {
                            alert("No se pudo actualizar la Cabaña. Error: " + textStatus);
                        }
                    });
                }
            } else if (Modulo == "Categoria") {
                if (confirm("¿Esta seguro que desea actualizar la categoria?")) {
                    let NombreCat = $('#NomCategory').val();
                    let DescripCat = $('#DescripCategory').val();
                    $.when(PutCategoriaById(IdData, NombreCat, DescripCat)).then(function (data, textStatus, jqXHR) {
                        if (jqXHR.status == "200" || jqXHR.status == "204" || jqXHR.status == "201") {
                            TablaCategoria();
                            alert("Categoria actualizada correctamente.");
                            myModal.hide();
                        } else {
                            alert("No se pudo actualizar la categoria. Error: " + textStatus);
                        }
                    });
                }
            } else if (Modulo == "Clientes") {
                if (confirm("¿Esta seguro que desea actualizar el cliente?")) {
                    let NombreCli = $('#NomCli').val();
                    let EmailCli = $('#EmailCli').val();
                    let EdadCli = $('#EdadCli').val();
                    $.when(PutClienteById(IdData, NombreCli, EmailCli, EdadCli)).then(function (data, textStatus, jqXHR) {
                        if (jqXHR.status == "200" || jqXHR.status == "204" || jqXHR.status == "201") {
                            TablaClientes();
                            alert("Cliente actualizado correctamente.");
                            myModal.hide();
                        } else {
                            alert("No se pudo actualizar el cliente. Error: " + textStatus);
                        }
                    });
                }
            } else if (Modulo == "Mensajes") {
                if (confirm("¿Esta seguro que desea actualizar el mensaje?")) {
                    let MensajeMen = $('#ValMensaje').val();
                    $.when(PutMensajeById(IdData, MensajeMen)).then(function (data, textStatus, jqXHR) {
                        if (jqXHR.status == "200" || jqXHR.status == "204" || jqXHR.status == "201") {
                            TablaMensajes();
                            alert("Mensaje actualizado correctamente.");
                            myModal.hide();
                        } else {
                            alert("No se pudo actualizar el mensaje. Error: " + textStatus);
                        }
                    });
                }
            }
        }
    } else if (Opcion == 1) {
        if (Modulo == "") {

        } else if (Modulo == "Categoria") {
            $.when(GetCategoriaEndId()).done(function (element) {
                if (element.items.length > 0) {
                    let GetIdEnd = element.items[0].id;
                    let Id = GetIdEnd + 1;
                    let NombreCat = $('#NomCategoryCreate').val();
                    let DescripCat = $('#DescripCategoryCreate').val();
                    $.when(PostCategoria(Id, NombreCat, DescripCat)).then(function (data, textStatus, jqXHR) {
                        if (jqXHR.status == "200" || jqXHR.status == "204" || jqXHR.status == "201") {
                            TablaCategoria();
                            alert("Categoria creada correctamente.");
                            myModal.hide();
                        } else {
                            alert("No se pudo crear la categoria. Error: " + textStatus);
                        }
                    });
                } else {
                    alert("No se puedo obtener el ultimo Id de la tabla categoria.");
                }
            });
        } else if (Modulo == "Clientes") {
            $.when(GetClienteEndId()).done(function (element) {
                if (element.items.length > 0) {
                    let GetIdEnd = element.items[0].id;
                    let Id = GetIdEnd + 1;
                    let NombreCli = $('#NomCliCreate').val();
                    let EmailCli = $('#EmailCliCreate').val();
                    let EdadCli = $('#EdadCliCreate').val();
                    $.when(PostCliente(Id, NombreCli, EmailCli, EdadCli)).then(function (data, textStatus, jqXHR) {
                        if (jqXHR.status == "200" || jqXHR.status == "204" || jqXHR.status == "201") {
                            TablaClientes();
                            alert("Cliente creado correctamente.");
                            myModal.hide();
                        } else {
                            alert("No se pudo crear el cliente. Error: " + textStatus);
                        }
                    });
                } else {
                    alert("No se puedo obtener el ultimo Id de la tabla clientes.");
                }
            });
        } else if (Modulo == "Mensajes") {
            $.when(GetMensajeEndId()).done(function (element) {
                if (element.items.length > 0) {
                    let GetIdEnd = element.items[0].id;
                    let Id = GetIdEnd + 1;
                    let MensajeMen = $('#CreateMensaje').val();
                    $.when(PostMensaje(Id, MensajeMen)).then(function (data, textStatus, jqXHR) {
                        if (jqXHR.status == "200" || jqXHR.status == "204" || jqXHR.status == "201") {
                            TablaMensajes();
                            alert("Mensaje creado correctamente.");
                            myModal.hide();
                        } else {
                            alert("No se pudo crear el mensaje. Error: " + textStatus);
                        }
                    });
                } else {
                    alert("No se puedo obtener el ultimo Id de la tabla mensajes.");
                }
            });
        }
    }
});
//OBTENER INFORMACION DE LA LINEA SELECCIONADA
var SelectedRow = null;
function GetDataRowSelected(param) {
    let Datos = null;
    let Id = null;
    let TableSelected = (param == "Cabañas") ? '#tablaCabana' : (param == "Categoria") ? "#tablaCategoria" : (param == "Clientes") ? '#tablaClientes' : (param == "Mensajes") ? '#tablaMensajes' : '';
    TableSelected += ' .highlight';
    $(TableSelected).each(function () {
        Id = $(this).find(".id").html();
    });
    if (Id != null)
        Datos = Id;
    return Datos;
}
function HeaderFooterPopup(tittle, modebutton) {
    document.getElementsByClassName('modal-title')[0].innerHTML = tittle;
    document.getElementById('Salvar').innerHTML = modebutton;
}
$(document).ready(function () {
    TablaCabanas();
    Modulo = "Cabañas";
});