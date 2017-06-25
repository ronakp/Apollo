//var vinElem = document.getElementById('vin');
//gm.info.getVehicleConfiguration(function(data) {
//  vinElem.innerHTML = gm.info.getVIN();
//});

// var vinElem = document.getElementById('vin');
// gm.info.getVehicleConfiguration(function(data) {
//   vinElem.innerHTML = gm.info.getVIN();
// });

//firebase

var IndicatorArray = ['ABS_active','ac_compressor_on','accelerator_position','adaptive_following_dist','adaptive_following_time','adaptive_ind_level','air_condition_status','airbag_deployed','airbag_left_deployed','airbag_right_deployed','airbag_side_deployed','alternative_fuel_alcohol','alternative_fuel_capacity','alternative_fuel_level','alternative_fuel_mode','audible_feedback','audio_channel','audio_source','autobeams_on','autobeams_status','aux_heat_on','aux_heat_temp','aux_jack','AV_channel','average_speed','barometric_pressure','battery_charge_state','battery_charge_state_off','battery_condition_eff','brake_fluid_ind','brake_ind','brake_lights','brake_pad_ind','brake_position','brakes_overheated','bulb_center_fail','bulb_frontleft_turn_fail','bulb_frontright_turn_fail','bulb_left_brake_fail','bulb_left_daytime_fail','bulb_left_low_fail','bulb_left_park_fail','bulb_licenseplate_fail','bulb_rear_fog_fail','bulb_rearleft_turn_fail','bulb_rearright_turn_fail','bulb_revechfail','bulb_reverse_fail','bulb_right_brake_fail','bulb_right_daytime_fail','bulb_right_low_fail','bulb_right_park_fail','cabin_condition_eff','change_oil_ind','charge_state','chime_active','city_lights','close_trunk_ind','compass_fault','compass_heading','compass_manual_calibration','cruise_adaptive_on','cruise_adaptive_speed','cruise_control','cruise_driver_on','cruise_driver_speed','cruise_ind','cruise_on','cruise_on_switch','cruise_switch','cruise_weather_ind','curve_ind','date_format','day','daytime_lights','dim_level','display_level','display_night','Display_units','distance_counter','distance_traveled','distance_traveled_battery','distance_traveled_fuel','dmap_driving_side','dmap_speed_category','dmap_speed_limit','dmap_speed_limit_assured','dmap_speed_limit_type','dmap_version_quarter','dmap_version_year','driver_door_open','driver_mode','driver_seatbelt_fastened','driver_workload','engine_coolant_temp','engine_oil_ind','engine_oil_life','engine_oil_pressure','engine_oil_temp','engine_speed','EngineOilChangeIndicationOn','EV_active_cooling','EV_bulk_day','EV_bulk_hour','EV_bulk_minute','EV_bulk_soc','EV_charge_interference_ind','EV_charge_port_door','EV_charger_level','EV_charger_status','EV_charging_status','EV_cord_alert','EV_cord_connected_ind','EV_delay_day','EV_delay_departure_select','EV_delay_hour','EV_delay_minute','EV_delay_season','EV_electrical_economy','EV_fuel_economy','EV_lifetime_economy','EV_max_gauge_range','EV_max_range','EV_min_range','EV_need_more_charge_time_ind','EV_overall_economy','EV_rate_day','EV_rate_hour','EV_rate_minute','EV_rate_season','EV_rate_select','EV_rate_status','EV_rate_table_val','EV_redundant_current','EV_redundant_voltage','EV_temp_limited_ind','EV_temp_limitted_ind','EV_time_day','EV_time_day_of_month','EV_time_enabled','EV_time_month','EV_time_rate','EV_time_response','EV_time_season','EV_time_season_select','EV_TOD_complete_high_day','EV_TOD_complete_high_hour','EV_TOD_complete_high_minute','EV_TOD_complete_low_day','EV_TOD_complete_low_hour','EV_TOD_complete_low_minute','EV_TOD_override','EV_TOD_start_high_day','EV_TOD_start_high_hour','EV_TOD_start_high_minute','EV_TOD_start_low_day','EV_TOD_start_low_hour','EV_TOD_start_low_minute','EV_TODC_departure_day','EV_TODC_departure_hour','EV_TODC_departure_minute','EV_TODC_Temporary_Override_Status','FOB_battery_low','Fob_battery_low','fog_light_ind','folding_top_state','forward_object_alert','forward_object_chime','forward_object_ind','forward_object_vehicle_ind','front_axle_ind','front_camera_blocked','front_camera_fail','front_camera_on','front_external_object_calc_module_fail','front_fan_speed','front_left_set_temperature','front_radar_blocked','front_radar_fail','front_right_set_temperature','fuel_capacity','fuel_consumption','fuel_economy_lifetime','fuel_eff','fuel_filler_cap_ind','fuel_filter_ind','fuel_filter_life','fuel_level','fuel_units','fuel_used','fuel_water_ind','gear','gear_automatic','gear_state','gps_elevation','gps_heading','gps_lat','gps_long','gps_speed','grade_braking','hatch_angle','hatch_motion','hatch_obstacle','hatch_open','hazard_switch','headlamp_beam','high_beam_ind','hill_decent_control','hill_descent_control','hood','hours','HUD_on','humid_glass_temp','humid_temp','humidity','hybrid_battery_range','hybrid_drive_mode','hybrid_instant_eff','hybrid_jump_start','hybrid_usable_charge','intake_air_temp','IPC_animation','lane_assist_audible_ind','lane_assist_ind','lane_assist_ind1','lane_assist_ind2','lane_departure_audible_ind','lane_departure_ind','lane_departure_ind1','lane_departure_ind2','lane_departure_left_status','lane_departure_right_status','lat_accel','light_level','lights','long_accel','milliseconds','minutes','month','native_application_swiped','odometer','oil_level_ind','oil_pressure_ind','onstar_minutes_remaining','outside_air_temp','park_assist_front','park_assist_front_distance','park_assist_front_region1','park_assist_front_region2','park_assist_front_region3','park_assist_front_region4','park_assist_icon_fill','park_assist_icon_state','park_assist_rear','park_assist_rear_distance','park_assist_rear_region1','park_assist_rear_region2','park_assist_rear_region3','park_assist_rear_region4','park_asst_disabled','park_asst_fail','park_brake_audible_warning','park_brake_display_message','park_brake_on','park_brake_release','park_brake_status_ind','park_brake_warning_ind','park_heat_counter','park_heat_on','park_heat_temp','passenger_door_open','passenger_present','passenger_seatbelt_fastened','pedestrian_warn','performance_mode','phonebook_prefered_sort_order','phonebook_preferred_sort_order','powerpack_air_in_temp','powerpack_fan_speed','propulsion_display_power','propulsion_display_power_percent','propulsion_display_total_power_percent','propulsion_position','radiator_fan_speed','radio_animation','rear_axle_ind','rear_radar_blocked','rear_radar_fail','rearleft_door_open','rearright_door_open','remote_started','road_build_up_area','road_class','road_controlled_access','road_lane_type','road_map_data','road_separate_lane','road_speed_type','road_speedlimit_units','rsa_installed','RSE_chapter','RSE_disk_state','RSE_elapsed_hours','RSE_elapsed_minutes','RSE_elapsed_seconds','RSE_front_video_state','RSE_source','RSE_state','RSE_title','RSE_total_chapters','RSE_total_hours','RSE_total_minutes','RSE_total_seconds','seatbelt_settings_on','seconds','service_trailer_brakes','shift_lever_position','shift_mode_status','side_blind_zone','sliding_door_left','sliding_door_right','spare_tire','speech_action','speech_confirmation_level','speech_prompt_text','speech_prompt_verbosity','speech_rec_status','speech_rec_window','speed_limit','speed_limit_vision','speed_limiter_type','speed_recommended','stability_enhancement_mode','stability_enhancement_status','steeringwheel_side','style_energy_eff','suspension_ind','system_state','tachometer','targa_top_state','teen_ABS_events','teen_distance_driven','teen_driver','teen_driver_active','teen_drowsy_alerts','teen_forward_headway_alerts','teen_forward_imminent_alerts','teen_forward_mitigation_events','teen_lane_warning_events','teen_max_speed','teen_open_throttle_events','teen_over_speeds','teen_rearward_mitigation_events','teen_stability_control_events','teen_stbility_control_events','teen_traction_control_events','throttle_position','time_format','tire_ind','tire_left_front_pressure','tire_left_rear_pressure','tire_monitor_reset','tire_right_front_pressure','tire_right_rear_pressure','top_speed','total_energy_eff','TPM_fail','traction_control','traction_control_active','traction_control_mode','trailer_brakelight_fail','trailer_brakes_gain','trailer_foglight','trailer_foglight_fail','trailer_hitch','trailer_leftturn_fail','trailer_rearleft_fail','trailer_rearright_fail','trailer_rightturn_fail','trailer_taillight_fail','trailer_wiring_fault','transmission_oil_temp','trip_odometer_1','trip_odometer_2','turn_signal','turn_signal_left','turn_signal_right','valet_on','vehicle_incline','vehicle_pitch_angle','vin_10_17','vin_2_9','washer_fluid_low','wheel_angle','window_driver','window_leftrear','window_passenger','window_rightrear','wipers_on','yaw_rate','year'];
setInterval(function() {
  gm.info.getVehicleData(onSuccess, onFailure, IndicatorArray)}, 2000);

var config = {
        apiKey: "AIzaSyAcA-bjaq78b3sjMBRXnN50--FNBoXjHQw",
        authDomain: "apollo-f12e0.firebaseapp.com",
        databaseURL: "https://apollo-f12e0.firebaseio.com",
        projectId: "apollo-f12e0",
        storageBucket: "apollo-f12e0.appspot.com",
        messagingSenderId: "429615290580"
      };

firebase.initializeApp(config);
var database = firebase.database();

function onSuccess(data){
    database.ref('user1/').set({
      d1: data
    });
    console.log(data);
}

function onFailure(){
    console.log("All signals in array are invalid");
}

var starCountRef = firebase.database().ref('user1/d1/transmission_oil_temp');
starCountRef.on('value', function(snapshot) {
  console.log(snapshot.val() + "check");
  if(snapshot.val() > 50)
  {
  nortification();
}
else {
  {
    console.log("emptiness");
  }
}
});


//firebase ends


(function () {
    setTimeout(
      function()
      {
      document.getElementById("wrapper").style.display="none";
      document.getElementById("wrapper").style.backgroundRepeat="none";
    }, 5000);
}) ();


(function  () {
    setTimeout(
      function homescreen(){  document.body.style.backgroundImage = "url('../images/screen.jpg')";
      document.getElementById("custom").className = "show";
    }, 5001);
}) ();


var message = "Transmission Lifetime Severely Limited. Service Required."
var id;

// function nortification()
// {
//   document.body.style.backgroundImage = "url('../images/screen-blur.jpg')";
//   document.getElementById("nortification").className = "show";
//   document.getElementById("speak-nortification").innerHTML = message;
// id = gm.voice.startTTS(success, message);
// function success()
// {
//   console.log(id);
// }
// }


function nortification()
{
  setTimeout(
    function()
    {
  document.body.style.backgroundImage = "url('../images/screen-blur.jpg')";
  document.getElementById("nortification").className = "show";
  document.getElementById("nortification").style.visibility = "visible";
  document.getElementById("speak-nortification").innerHTML = message;
  document.getElementById("custom").className = "hidden";
id = gm.voice.startTTS(success, message);
function success()
{
  console.log(id);
}
}, 10000);
}

function hideNortification()
{
  document.getElementById("nortification").style.visibility = "hidden";
  document.body.style.backgroundImage = "url('../images/screen.jpg')";

}
