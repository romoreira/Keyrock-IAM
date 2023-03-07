import { Trend } from "k6/metrics";
import http from 'k6/http';

var ResponseTimeTrend = new Trend("responseTime");


export const options = {
  vus: 1, // 1 user looping for 1 minute
  duration: '30s',

  //thresholds: {
  //  http_req_duration: ['p(99)<1500'], // 99% of requests must complete below 1.5s
  //},
};

export default function () {
  const payload = JSON.stringify({
    columns: ['src_ip', 'dst_ip', 'src_port', 'dst_port', 'protocol', 'timestamp', 'flow_duration', 'flow_byts_s', 'flow_pkts_s', 'fwd_pkts_s', 'bwd_pkts_s', 'tot_fwd_pkts', 'tot_bwd_pkts', 'totlen_fwd_pkts', 'totlen_bwd_pkts', 'fwd_pkt_len_max', 'fwd_pkt_len_min', 'fwd_pkt_len_mean', 'fwd_pkt_len_std', 'bwd_pkt_len_max', 'bwd_pkt_len_min', 'bwd_pkt_len_mean', 'bwd_pkt_len_std', 'pkt_len_max', 'pkt_len_min', 'pkt_len_mean', 'pkt_len_std', 'pkt_len_var', 'fwd_header_len', 'bwd_header_len', 'fwd_seg_size_min', 'fwd_act_data_pkts', 'flow_iat_mean', 'flow_iat_max', 'flow_iat_min', 'flow_iat_std', 'fwd_iat_tot', 'fwd_iat_max', 'fwd_iat_min', 'fwd_iat_mean', 'fwd_iat_std', 'bwd_iat_tot', 'bwd_iat_max', 'bwd_iat_min', 'bwd_iat_mean', 'bwd_iat_std', 'fwd_psh_flags', 'bwd_psh_flags', 'fwd_urg_flags', 'bwd_urg_flags', 'fin_flag_cnt', 'syn_flag_cnt', 'rst_flag_cnt', 'psh_flag_cnt', 'ack_flag_cnt', 'urg_flag_cnt', 'ece_flag_cnt', 'down_up_ratio', 'pkt_size_avg', 'init_fwd_win_byts', 'init_bwd_win_byts', 'active_max', 'active_min', 'active_mean', 'active_std', 'idle_max', 'idle_min', 'idle_mean', 'idle_std', 'fwd_byts_b_avg', 'fwd_pkts_b_avg', 'bwd_byts_b_avg', 'bwd_pkts_b_avg', 'fwd_blk_rate_avg', 'bwd_blk_rate_avg', 'fwd_seg_size_avg', 'bwd_seg_size_avg', 'cwe_flag_count', 'subflow_fwd_pkts', 'subflow_bwd_pkts', 'subflow_fwd_byts', 'subflow_bwd_byts'],
    data: [['10.0.0.4', '168.63.129.16', 45076, 80, 6, '2023-03-06 11:04:57', 3671.884536743164, 761461.8520875268, 2178.717745600935, 1361.6985910005844, 817.0191546003506, 5, 3, 537, 2259, 265.0, 66.0, 107.4, 78.86089018011398, 2119.0, 66.0, 753.0, 965.9133846606882, 2119, 66, 349.5, 671.8965694212168, 451445.0, 100, 60, 20, 1, 524.554933820452, 1528.024673461914, 18.596649169921875, 621.118600952431, 3224.611282348633, 1549.9591827392578, 24.557113647460938, 806.1528205871582, 697.7342095845096, 2143.85986328125, 1478.433609008789, 665.4262542724609, 1071.929931640625, 406.50367736816406, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0.6, 349.5, 64240, 49153, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 107.4, 753.0, 0, 5, 3, 537, 2259]],
  });
  const headers = { 'Content-Type': 'application/json' };
  const res = http.post('http://20.210.36.32:8080/prediction/svm', payload, { headers });
  console.log('Response time was '+ String(res.timings.duration) + ' ms');
  ResponseTimeTrend.add(res.timings.duration)
}
