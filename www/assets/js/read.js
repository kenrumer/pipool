
function drawScenes (scene) {
    var fa_icon = "";
    if (scene.status == "0") { // on
        fa_icon = "on fa-check";
    } else if (scene.status == "1") { // off
        fa_icon = "fa-times";
    } else if (scene.status == "2") { //disabled
        fa_icon = "disabled fa-times";
    }
    $("#status_scenes").append(`
        <section class="col-2 col-12-narrower">
            <div class="box highlight">
                <i class="icon solid minor ${fa_icon}"></i>
                <h5>${scene.name}</h5>
                <span></span>
            </div>
        </section>`
    );
    $("#scenes_rows").append(`
        <div class="row gtr-0 border">
            <section class="col-2 col-12-narrower">
                <div class="box highlight">
                    <i class="icon solid minor ${fa_icon}"></i>
                    <h5>${scene.name}</h5>
                    <span></span>
                </div>
            </section>
            <section class="col-2 col-12-narrower">
                <div class="box highlight">
                    <input type="text" name="name" value="${scene.name}">
                </div>
            </section>
            <section class="col-4 col-12-narrower">
                <div class="box highlight">
                    <input type="text" name="description" value="${scene.description}">
                </div>
            </section>
            <section class="col-2 col-12-narrower">
                <div class="box highlight">
                    <input type="button" name="actions" value="actions">
                </div>
            </section>
            <section class="col-2 col-12-narrower">
                <div class="box highlight">
                    <input type="button" name="delete" value="delete">
                </div>
            </section>
        </div>`
    );
}

function drawActions (action) {
    var fa_icon = "";
    if (action.statusType == "onoff") {
        if (action.statusValue == "on") {
            fa_icon = "on fa-check";
        } else {
            fa_icon = "off fa-times";
        }
        $("#status_actions").append(`
            <section class="col-2 col-12-narrower">
                <div class="box highlight">
                    <i class="icon solid minor ${fa_icon}"></i>
                    <h5>${action.name}</h5>
                    <span></span>
                </div>
            </section>`
        );
    } else if (action.statusType == "temperature") {
        if (action.temperatureDesiredValue >= action.temperatureValue) {
            fa_icon = "fa-temperature-low"
        } else {
            fa_icon = "fa-temperature-high"
        }
        $("#status_actions").append(`
            <section class="col-2 col-12-narrower">
                <div class="box highlight">
                    <i class="icon solid minor ${fa_icon}"></i>
                    <h5>${action.name}</h5>
                    <span>current: <span id="temp_test">${action.temperatureValue}</span>&#176;</span><br/>
                    <span>desired: <span id="temp_test">${action.temperatureDesiredValue}</span>&#176;</span>
                </div>
            </section>`
        );
    }
    $("#actions_rows").append(`
        <div class="row gtr-0 border">
            <section class="col-2 col-12-narrower">
                <div class="box highlight">
                    <i class="icon solid minor ${fa_icon}"></i>
                    <h5>${action.name}</h5>
                    <span></span>
                </div>
            </section>
            <section class="col-2 col-12-narrower">
                <div class="box highlight">
                    <input type="text" name="name" value="${action.name}">
                </div>
            </section>
            <section class="col-4 col-12-narrower">
                <div class="box highlight">
                    <input type="text" name="description" value="${action.description}">
                </div>
            </section>
            <section class="col-2 col-12-narrower">
                <div class="box highlight">
                <input type="text" name="statusType" value="${action.statusType}">
                </div>
            </section>
            <section class="col-2 col-12-narrower">
                <div class="box highlight">
                    <input type="button" name="delete" value="delete">
                </div>
            </section>
        </div>`
    );
}

function drawSchedules (schedule) {
    var fa_icon = "";
    if (schedule.status == 0) { // running
        fa_icon = "on fa-calendar-alt";
    } else if (schedule.status == 1) { // between runs
        fa_icon = "fa-calendar-alt";
    } else if (schedule.status == 2) { // last run cancelled
        fa_icon = "off fa-calendar-alt";
    } else if (schedule.status == 3) { // disabled
        fa_icon = "disabled fa-calendar-alt";
    }
    $("#status_schedules").append(`
        <section class="col-2 col-12-narrower">
            <div class="box highlight">
                <i class="icon solid minor ${fa_icon}"></i>
                <h5>${schedule.name}</h5>
                <span></span>
            </div>
        </section>`
    );
    $("#schedules_rows").append(`
        <div class="row gtr-0 border">
            <section class="col-2 col-12-narrower">
                <div class="box highlight">
                    <i class="icon solid minor ${fa_icon}"></i>
                    <h5>${schedule.name}</h5>
                    <span></span>
                </div>
            </section>
            <section class="col-2 col-12-narrower">
                <div class="box highlight">
                    <input type="text" name="name" value="${schedule.name}">
                </div>
            </section>
            <section class="col-4 col-12-narrower">
                <div class="box highlight">
                    <input type="text" name="description" value="${schedule.description}">
                </div>
            </section>
            <section class="col-2 col-12-narrower">
                <div class="box highlight">
                    <input type="button" name="scenes" value="scenes">
                </div>
            </section>
            <section class="col-2 col-12-narrower">
                <div class="box highlight">
                    <input type="button" name="delete" value="delete">
                </div>
            </section>
        </div>
        <div class="row gtr-0 border">
            <section class="col-2 col-12-narrower">
                <div class="box highlight">
                    <input type="text" name="cron" value="${schedule.cron}">
                </div>
            </section>

            <!-- Calendar -->
            <section class="box calendar">
                <div class="inner">
                    <table>
                        <caption>July 2014</caption>
                        <thead>
                            <tr>
                                <th scope="col" title="Monday">M</th>
                                <th scope="col" title="Tuesday">T</th>
                                <th scope="col" title="Wednesday">W</th>
                                <th scope="col" title="Thursday">T</th>
                                <th scope="col" title="Friday">F</th>
                                <th scope="col" title="Saturday">S</th>
                                <th scope="col" title="Sunday">S</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colspan="4" class="pad"><span>&nbsp;</span></td>
                                <td><span>1</span></td>
                                <td><span>2</span></td>
                                <td><span>3</span></td>
                            </tr>
                            <tr>
                                <td><span>4</span></td>
                                <td><span>5</span></td>
                                <td><a href="#">6</a></td>
                                <td><span>7</span></td>
                                <td><span>8</span></td>
                                <td><span>9</span></td>
                                <td><a href="#">10</a></td>
                            </tr>
                            <tr>
                                <td><span>11</span></td>
                                <td><span>12</span></td>
                                <td><span>13</span></td>
                                <td class="today"><a href="#">14</a></td>
                                <td><span>15</span></td>
                                <td><span>16</span></td>
                                <td><span>17</span></td>
                            </tr>
                            <tr>
                                <td><span>18</span></td>
                                <td><span>19</span></td>
                                <td><span>20</span></td>
                                <td><span>21</span></td>
                                <td><span>22</span></td>
                                <td><a href="#">23</a></td>
                                <td><span>24</span></td>
                            </tr>
                            <tr>
                                <td><a href="#">25</a></td>
                                <td><span>26</span></td>
                                <td><span>27</span></td>
                                <td><span>28</span></td>
                                <td class="pad" colspan="3"><span>&nbsp;</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>`
    );
}

(function($) {
    $.ajax({
        url: "/api/get_scenes.php",
        context: document.body
    }).done(function(data) {
        scenes = JSON.parse(data);
        for (scene in scenes) {
            drawScenes(scenes[scene]);
        }
    });
    $.ajax({
        url: "/api/get_actions.php",
        context: document.body
    }).done(function(data) {
        actions = JSON.parse(data);
        for (action in actions) {
            drawActions(actions[action]);
        }
    });
    $.ajax({
        url: "/api/get_schedules.php",
        context: document.body
    }).done(function(data) {
        schedules = JSON.parse(data);
        for (schedule in schedules) {
            drawSchedules(schedules[schedule]);
        }
    });
})(jQuery);